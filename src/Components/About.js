import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";
import file from "../assets/file/Shivam_Gupta_CV.pdf";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const social = this.props.data.social;

    // const resumeDownload = this.props.data.resumedownload;
    const resumeDownload = () => {
      const link = document.createElement("a");
      link.href = file;
      link.download = "Shivam_Gupta_CV.pdf"; // custom name
      document.body.appendChild(link);
      link.click();
      link.remove();
    };

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row p-5">
            <div className="col-lg-4 mb-lg-0 d-flex  justify-content-center">
              <img
                className="profile-pic"
                style={{objectFit:"cover"}}
                src={ this.props.data.profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="col-lg-6 text-left">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="col-lg-6 mb-lg-0">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Name: {name}</span>
                    <br />
                    <span>
                      Address: {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>Contact No:{phone}</span>
                    <br />
                    <span>Email Id: {email}</span>
                    {social.map(function (network) {
                      return (
                        <>
                          <br />
                           <span>{`${network.name}: `}:
                          <a
                            href={`${network.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {network.url}
                          </a>
                          </span>
                        </>
                      );
                    })}
                    <br />
                  </p>
                </div>
                <div className="col-lg-6 mb-lg-0 d-flex justify-content-start justify-content-lg-end">
                  <p>
                    <a onClick={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
