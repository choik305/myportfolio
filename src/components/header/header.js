import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <>
        {/*generated code*/}
        <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#hide-nav" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {resumeData.name}.</h1>
            <h3>I'm a {resumeData.role}. {resumeData.roleDescription}</h3>
            <hr />
            <ul className="social">
                <li><a href="https://www.facebook.com/choik305"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://www.linkedin.com/in/kevinyc/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/kevinyc-dri"><i className="fa fa-github" /></a></li>
                <li><a href="https://use.foldapp.com/r/NJ4UPC7A"><img src="https://uploads-ssl.webflow.com/5e5d98432c687cb6c71f7894/5fa44b8b3b1bf8774fad57dd_rotating_fold_bitcoin_trans.gif" width="85" alt="freebitcoin" class="image-23"/></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
      </>
    );
  }
}