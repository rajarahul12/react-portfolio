import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });

      var work = this.props.data.work.map(function (work, index) {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={
              index === 0
                ? { background: "rgb(33, 150, 243)", color: "#fff" }
                : {}
            }
            contentArrowStyle={
              index === 0 ? { borderRight: "7px solid  rgb(33, 150, 243)" } : {}
            }
            date={work.years}
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
              height: "30px",
              width: "30px",
              marginTop: "15px",
            }}
            icon={
              <i
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "8px",
                }}
                class="fab fa-dev"
              ></i>
            }
          >
            <h3 className="vertical-timeline-element-title">{work.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              India, Bangalore
            </h4>
            <p style={{ fontSize: "16px" }}>{work.description}</p>
          </VerticalTimelineElement>
        );
      });

      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em style={{ display: "flex" }}>
              <img
                style={{ height: "30px" }}
                alt={skills.name}
                src={require(`../images/${skills.name}.png`)}
              />{" "}
              <p style={{ marginLeft: "10px", marginTop: "5px" }}>
                {skills.name}
              </p>
            </em>
          </li>
        );
      });
    }

    return (
      <section style={{ backgroundColor: "#e3e3e3" }} id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <VerticalTimeline>{work}</VerticalTimeline>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
