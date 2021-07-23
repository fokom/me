import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='about' className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Us</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p><strong>Hi I'm Foko Valdes</strong> I'm a Douala based Frontend Developer. Proactive, customer-oriented Software Engineer professional with over 4 years of demonstrated experience in globally scaled businesses. Fast learner and always up for improvement so as to meet business needs.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                    <div className="services color-1">
                      <span className="icon2"><i className="icon-bulb" /></span>
                      <h3>FrontEnd Dev</h3>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                    <div className="services color-2">
                      <span className="icon2"><i className="icon-globe-outline" /></span>
                      <h3>Learner/Helper</h3>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                    <div className="services color-3">
                      <span className="icon2"><i className="icon-data" /></span>
                      <h3>Software</h3>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                    <div className="services color-4">
                      <span className="icon2"><i className="icon-phone3" /></span>
                      <h3>Application</h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                    <div className="hire">
                      <h2>I am happy to know you <br />Ready to learn and if possible contribute to your project</h2>
                      <a href="linkedin.com/in/foko-valdes" className="btn-hire">Hire me</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </React.Fragment>
    );
  }
}