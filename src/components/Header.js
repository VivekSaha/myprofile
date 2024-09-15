import React, { useEffect } from "react";
import Sticky from "sticky-js";

const Header = () => {
  useEffect(() => {
    // Initialize sticky.js
    const sticky = new Sticky(".header");

    // Smooth scroll and menu active on click
    const handleScroll = (event) => {
      const target = event.target;
      if (target.hash !== "") {
        event.preventDefault();

        const targetElement = document.querySelector(target.hash);

        // Smooth scroll to the target element
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust scroll offset
            behavior: "smooth",
          });
        }

        // Update active class for clicked menu item
        updateActiveLink(target.hash);

        // Close the mobile menu after clicking (for mobile view)
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          const bootstrapCollapse = new window.bootstrap.Collapse(navbarCollapse);
          bootstrapCollapse.hide();
        }
      }
    };

    // Update the active link based on scroll position
    const updateActiveLink = (hash) => {
      const navItems = document.querySelectorAll(".nav-menu li");
      navItems.forEach((item) => item.classList.remove("menu-active"));
      const activeLink = document.querySelector(`a[href="${hash}"]`);
      if (activeLink) {
        activeLink.closest("li").classList.add("menu-active");
      }
    };

    // Handle active class based on scroll position
    const handleActiveOnScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + 60; // Offset for navbar height

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          updateActiveLink(`#${sectionId}`);
        }
      });
    };

    // Attach click event to all nav links
    const navLinks = document.querySelectorAll(".nav-menu a, #mobile-nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    // Attach scroll event listener for active menu item on scroll
    window.addEventListener("scroll", handleActiveOnScroll);

    // Cleanup both sticky instance and event listeners when component unmounts
    return () => {
      sticky.destroy(); // Cleanup sticky.js

      navLinks.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });

      window.removeEventListener("scroll", handleActiveOnScroll);
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Vivek Kumar</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-menu">
                  <li className="nav-item"><a className="nav-link" href="#top-header">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#about">About Me</a></li>
                  <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
                  <li className="nav-item"><a className="nav-link" href="#qualification">Qualification</a></li>
                  <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                  <li className="nav-item"><a className="nav-link" href="#contact">Contact Me</a></li>
                </ul>
                <ul className="nav social-nav pull-right d-none d-lg-inline">
                  <a href="https://www.facebook.com/viveklovraj" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                  <a href="https://x.com/VivekSaha1992" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
                  <a href="https://www.instagram.com/viveksaha92/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/vivek-kumar-39587387/" target="_blabk" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                  <a href="https://github.com/VivekSaha" target="_blabk" rel="noreferrer"><i className="fa fa-github"></i></a>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
