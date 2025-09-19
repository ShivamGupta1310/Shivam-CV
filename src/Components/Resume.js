import React, { Component } from "react";
import { Slide } from "react-awesome-reveal";
import { perBackgroundColor } from "../utils/utils";

class Resume extends Component {
  // Render a single work / education item
  renderItem = (index, title, subTitle, years, description) => (
    <div key={index}>
      <h3>{title}</h3>
      <p className="info">
        {subTitle} <span>&bull;</span> <em className="date">{years}</em>
      </p>
      <p>{description}</p>
    </div>
  );

  // Render a progress bar item (skills/tools)
  renderProgressBar = (index, skill) => (
    <div className="row m-0 p-0 progressList" key={index}>
      <p className="p-0">{skill.name}</p>
      <div
        className="progress p-0 m-0"
        style={{ backgroundColor: "#333", height: "20px" }}
      >
        <div
          className={`progress-bar ${perBackgroundColor( skill.level)}`}
          role="progressbar"
          style={{ width: skill.level + "%", backgroundColor: "#000" }} // black bar
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );

  render() {
    const { data } = this.props;
    if (!data) return null;

    return (
      <section id="resume" className="p-5">
        {/* Work Section */}
        <Slide direction="left" duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              {data.work.map((job, index) =>
                this.renderItem(
                  index,
                  job.company,
                  job.title,
                  job.years,
                  job.description
                )
              )}
            </div>
          </div>
        </Slide>

        {/* Education Section */}
        <Slide direction="right" duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {data.education.map((edu, index) =>
                    this.renderItem(
                      index,
                      edu.school,
                      edu.degree,
                      edu.graduated,
                      edu.description
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Skills Section */}
        <Slide direction="left" duration={1300}>
          <div className="row education">
            <div className="col-lg-3">
              <h1 className="text-start text-md-center">
                <span>Skills</span>
              </h1>
            </div>
            <div className="col-lg-9">
              <p>{data.skillmessage}</p>
              <div className="bars">
                <div className="skills">
                  {data.skills.map((skill, index) =>
                    this.renderProgressBar(index, skill)
                  )}
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Tools & Technologies Section */}
        <Slide direction="right" duration={1300}>
          <div className="row education">
            <div className="col-lg-3">
              <h1 className="text-start text-md-center">
                <span>Tools & Technologies</span>
              </h1>
            </div>
            <div className="col-lg-9">
              <p>{data.skillmessage}</p>
              <div className="bars">
                <div className="skills">
                  {data.tools.map((tool, index) =>
                    this.renderProgressBar(index, tool)
                  )}
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
