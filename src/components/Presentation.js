import React, { Component } from 'react';
import About from './about';
import Contact from './contact';
import Education from './education';
import Introduction from './introduction';
import Services from './services';
import Sidebar from './sidebar';
import Skills from './skills';
import Work from './work';

export default class Presentation extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-wrap">
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
          <Sidebar />
          <div id="colorlib-main">
          <Introduction />
          <About />
          <Services />
          <Skills />
          <Education />
          <Work />
          
          </div>{/* end:colorlib-main */}
        </div>

      </React.Fragment>
    );
  }
}