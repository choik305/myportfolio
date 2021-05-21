import React, { Component } from 'react'
export default class Resume extends Component {
  render() {
    return (
      <>
        <section id="resume">Î
          <div className="row education">
            <div className="three columns header-col">
              <h1><span className="ed-title">Education</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3 className="school-title">Boca Code</h3>
                  <p className="info">Software Engineering Career Course <span>•</span><em className="date">June 2021</em></p>
                  <p>
                    Boca Code’s Software Engineering Career Course focuses on the latest technology which include JavaScript, Node.js, HTML, CSS, React, Firebase and many more. On top of technical skills, Boca Code teaches soft skills that hone in on professional development, agile methodologies, team work, communication and collaboration.
                  </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3 className="school-title">University of Nevada, Las Vegas</h3>
                  <p className="info">B.S. Hotel Management <span>•</span> <em className="date">June 2008</em></p>
                  <p>
                    UNLV is a doctoral-degree-granting institution of more than 30,000 students and 3,500 faculty and staff that is recognized as “very high research activity” by the Carnegie Classification of Institutions of Higher Education.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}