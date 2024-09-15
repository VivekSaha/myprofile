import React from "react";


const About = () => {
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 90 },
    { name: "Bootstrap", percentage: 85 },
    { name: "JavaScript", percentage: 70 },
    { name: "JQuery", percentage: 60 },
    { name: "SaaS", percentage: 75 },
    { name: "React JS", percentage: 60 },
    { name: "AEM Site Front End", percentage: 85 },
    { name: "Wordpress", percentage: 80 },
    { name: "PHP", percentage: 60 },
    { name: "MySQL", percentage: 60 },
    { name: "MongoDB", percentage: 25 },
    { name: "Node JS", percentage: 45 },
    { name: "Gatsby", percentage: 45 },
    { name: "Shopify", percentage: 45 },
  ];

  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-12">
              <header className="section-header">
                <h2>About Me</h2>
              </header>
              <h3>Professional Summary</h3>
              <p>
                As a Sr. Software Developer in Langoor Digital Pvt Ltd., an
                emerging software development organization, I have been involved
                in the design, coding, code review and integration of the
                Website. My work typically involves study of the proposed
                application, developing, and testing of the same.
              </p>
              <h3>Career Objective</h3>
              <p>
                Having extensively worked in HTML5, AEM Site, AEM Components,
                AEM Assets, SaaS, CSS3, JAVASCRIPT, BOOTSTRAP, PHP, WORDPRESS,
                (THEME CUSTOMIZATION), E-COMMERCE CMS for more than 9+ years in
                IT industry as a Software Developer, I am looking for a
                challenging position in the field of Software Design and
                Development in an organization that will allow me to grow with
                the organization, both professionally and personally with up
                gradation of knowledge and technical skill.
              </p>
              <h3>My Skills</h3>
              <div className="row">
                {skills.map((skill, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="skills">
                      <div className="skill-name">
                        <p>{skill.name}</p>
                        <p>{skill.percentage}%</p>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${skill.percentage}%` }}
                          aria-valuenow={skill.percentage}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
