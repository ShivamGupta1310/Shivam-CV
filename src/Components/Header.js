import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const Header = ({ data }) => {
  // Typing effect states
  const content =
    data?.description || "I want to display this text word by word";
  const words = content.split(" ");
  const [displayText, setDisplayText] = useState("");
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (wordIndex < words.length) {
      if (charIndex < words[wordIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentWord((prev) => prev + words[wordIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 100); // typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentWord + " ");
          setCurrentWord("");
          setWordIndex(wordIndex + 1);
          setCharIndex(0);
        }, 400); // pause between words
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, wordIndex, words, currentWord]);

  if (!data) return null; // ✅ moved AFTER hooks

  const { github, name } = data;
  console.log("displayText", displayText,displayText.length, "currentWord", currentWord,currentWord.length);

  return (
    <header id="home" style={{ backgroundColor: "#000" }}>
      {/* <ParticlesBg type="custom" config={config} bg={true} /> */}

      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav" style={{ justifyContent: "center", backgroundColor: "#000" }}>
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom>
            <h1 className="responsive-headline">{name}</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h3>
              {displayText}
              {currentWord}
              <span className="cursor">{ currentWord.length !== 0 && `|`}</span>
            </h3>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              <a
                href="#portfolio"
                className="smoothscroll button btn project-btn"
              >
                <i className="fa fa-book"></i>Project
              </a>
              <a href={github} className="button btn github-btn">
                <i className="fa fa-github"></i>Github
              </a>
            </ul>
          </Fade>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
