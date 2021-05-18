import React from 'react'

function About() {
    return (
      <>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="profile-pic" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>I am a software engineering student, husband and father with many years of experience in various industries. I have a passion for educational technology and Open-source technology. I am an evangelist for software engineering and strong company culture.</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Kevin Choi</span>
                    <br />
                    <span>Miami, FL</span>
                    <br />
                    <span>kevinyoungchoi@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="/KevinResume.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  export default About