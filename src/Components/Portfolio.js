import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Portfolio = ({ data }) => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  if (!data) return null;

  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row p-5">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div className="row p-5">
              {data.projects.map((project, index) => {
                const projectImage = "images/portfolio/" + project.image;
                return (
                  <div
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleShow(project)}
                    className="col-lg-4 mb-lg-0 d-flex justify-content-center"
                  >
                    <div className="item-wrap w-100">
                      <img
                        style={{
                          objectFit: "cover",
                          height: "200px",
                          width: "100%",
                        }}
                        className="profile-pic w-100 w-lg-50"
                        height={150}
                        src={(project.image && projectImage) || project.logo}
                        alt={project.title}
                      />
                      <h1 style={{ textAlign: "center", fontSize: "1rem" }}>
                        {project.title}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>

      {/* Modal for selected project */}
      {selectedProject && (
        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="workList">
            {/* <div className="text-center mb-3">
              <img
                height={"150px"}
                width={"200px"}
                src={"images/portfolio/" + selectedProject.image}
                alt={selectedProject.title}
                style={{ maxWidth: "100%", borderRadius: "8px" }}
              />
            </div> */}
            <p>
              Frontend: {selectedProject.frontend} <br />
              Backend: {selectedProject.backend}
            </p>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              {selectedProject.points?.map((point, idx) => (
                <li key={idx} className="workBulletItem">
                  {point}
                </li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default Portfolio;
