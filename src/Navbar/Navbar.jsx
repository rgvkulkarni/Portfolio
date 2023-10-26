import logo from "../assets/sushant-mishra-logo.svg";
import { gsap } from "gsap";
import { useState } from "react";

function Navbar({menuOnClick }) {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scroll(e) {
    const sectionId = e.target.parentNode.getAttribute("href").substring(1);
    if (sectionId === "about" || sectionId === "projects") {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  }

  return (
    <div className="nav-container">
      <nav className="nav" onClick={(e) => scroll(e)}>
        <div className="logo-wrapper">
          <a href="#hero">
            <img className="logo" src={logo} />
          </a>
        </div>
        <div className="nav-items">
          <ul>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="https://sushantshash.hashnode.dev/" target="_blank">
              <li>Blogs</li>
            </a>
            <a href="mailto:sushantsgml@gmail.com">
              <li className="bold contact-me">Say Hello</li>
            </a>
          </ul>
        </div>
        <div className="mobile-menu-wrapper" onClick={() => menuOnClick()}>
          <span className="bar-upper"></span>
          <span className="bar-lower"></span>
          <div className="nav-items-menu">
            <ul>
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#projects">
                <li>Projects</li>
              </a>
              <a href="https://sushantshash.hashnode.dev/" target="_blank">
                <li>Blogs</li>
              </a>
              <a href="mailto:sushantsgml@gmail.com">
                <li className="bold contact-me">Say Hello</li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
