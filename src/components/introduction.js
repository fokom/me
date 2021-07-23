import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />I'm Foko</h1>
                          <h2>A computer enthusiaste passionate about the web</h2>
                          <p><a href="https://docs.google.com/document/d/1DDRg0egfa5PeEB0u6Ga4tLywwmP5poytRwvjAqn_oho/edit?usp=sharing" target="_blank" className="btn btn-primary btn-learn">Download CV <i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I am <br />a Software Engineer</h1>
                          
                          <p><a className="btn btn-primary btn-learn">Scroll for More <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

      </React.Fragment>
    );
  }
}