import React, { Component } from "react";
import TypedInfo from "./TypedInfo";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      // var occupation = this.props.data.occupation;
      // var description = this.props.data.description;
      // var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul style={{ fontSize: "16px" }} id="nav" className="nav">
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
                Work
              </a>
            </li>
            {/* <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li> */}
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              Hello, I'm <span style={{ color: "#ed6363" }}>{name}</span>
            </h1>
            <h2 style={{ fontSize: "40px", marginTop: "20px" }}>
              {window.innerWidth <= 650 ? (
                <TypedInfo
                  strings={[
                    "I'm a Software Developer",
                    "I'm a FullStack developer",
                  ]}
                />
              ) : (
                <TypedInfo
                  strings={[
                    "I'm a Software Developer at IBM",
                    "I'm a FullStack web developer...",
                  ]}
                />
              )}
            </h2>

            {/* <h3>
              I'm a {city} based <span>{occupation}</span>. {description}.
            </h3> */}
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
