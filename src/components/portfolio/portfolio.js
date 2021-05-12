import React from 'react'

function Portfolio() {
  return (
    <>
      <div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Miami EdTech</h3>
                <p className="info">Lead Instructor <span>•</span> <em className="date">March 2020 - April 2021</em></p>
                <p>
                  Academic Coordinator and Instructor. Lead Instructor- Computer Programming, IT, Software Development, Computer Science Pedagogy, Project Management, Coding, and Web Development.
                  </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Teaching Fellow</h3>
                <p className="info">Teachers Assistant <span>•</span> <em className="date">July 2019 - August 2019</em></p>
                <p>
                  Part-Time Teaching Fellow - Computer Programming, IT, Software Development, Front-end Web Development, Back-end Web Development, Project Management, Coding, and Web Development.
                  </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>TechHire Lead Instructor</h3>
                <p className="info">Lead Instructor <span>•</span> <em className="date">June 2019 - August 2019</em></p>
                <p>
                  TechHire lead instructor for Web-Development Course teaching HTML, CSS, JavaScript, jQuery. Led career mentorship and implemented growth mindset Pedagogy to students at Florida Memorial University.
                  </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}


        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              {/* portfolio-wrapper */}
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title="affirmations">
                      <img alt="affirmations" src="images/portfolio/affirmations.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Affirmations</h5>

                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title>
                      <img alt="resources-co" src="images/portfolio/resources-logo.jpg" style={{ height: 216 }} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Resources.co</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05" title="weather-vue">
                      <img alt="resources-co" src="images/portfolio/weather.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Vue.js Weather App</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}

              </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup
	      --------------------------------------------------------------- */}
            <div id="modal-04" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/affirmations.jpg" alt="affirmations" />
              <div className="description-box">
                <h4>Affirmations</h4>
                <span className="categories"><i className="fa fa-tag" /></span>
              </div>
              <div className="link-box">
                <a href="https://affirmation-kevin.web.app/" target="_blank" rel="noopener noreferrer">APP DEMO</a>
                <a href="https://github.com/kevinyc-dri/Affirmations-App" target="_blank" rel="noopener noreferrer">GITHUB REPO</a>
                <a href="#affirmations" className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-04End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/resources-logo.jpg" alt="resources-co" />
              <div className="description-box">
                <h4>Resources.co</h4>
                <span className="categories"><i className="fa fa-tag" /></span>
              </div>
              <div className="link-box">
                <a href="https://resources.co/" target="_blank" rel="noopener noreferrer">APP DEMO</a>
                <a href="https://github.com/ResourcesCo" target="_blank" rel="noopener noreferrer">GITHUB REPO</a>
                <a href="#resources-co" className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-03 End */}
            <div id="modal-05" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/weather.jpg" alt="weather" />
              <div className="description-box">
                <h4>Weather App</h4>
                <span className="categories"><i className="fa fa-tag" /></span>
              </div>
              <div className="link-box">
                <a href="https://weather-json2.vercel.app/" target="_blank" rel="noopener noreferrer">APP DEMO</a>
                <a href="https://github.com/kevinyc-dri/weather-json2" target="_blank" rel="noopener noreferrer">APP DEMO</a>
                <a href="#weather" className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-05End */}

          </div> {/* row End */}
        </section> {/* Portfolio Section End*/}


        {/* Skills
----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>HTML5, CSS, JavaScript, React, SQL, jQuery, PosGres, Postman, CRUD, Ruby on Rails, Node.js, SCRUM Master, Docker, Kubernetes.</p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>HTML</em></li>
                <li><span className="bar-expand illustrator" /><em>CSS</em></li>
                <li><span className="bar-expand wordpress" /><em>JavaScript</em></li>
                <li><span className="bar-expand css" /><em>React</em></li>
                <li><span className="bar-expand html5" /><em>Ruby on Rails</em></li>
                <li><span className="bar-expand jquery" /><em>Node.js</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
        {/* Resume Section End*/}
      </div>
    </>
  )
}

export default Portfolio