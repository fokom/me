import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
          <div className="text-center">
            <div className="author-img" style={{backgroundImage: 'url(images/photo.jpeg)'}} />
            <h1 id="colorlib-logo"><a href="index.html">Foko Valdes</a></h1>
            <p>fokovaldes1@gmail.com</p>
            <span className="position"><a href="#">FrontEnd Engineer</a></span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active"><a href="#colorlib-hero" data-nav-section="home">Home</a></li>
                <li><a href="#about" data-nav-section="about">About</a></li>
                <li><a href="#services" data-nav-section="services">My Passion</a></li>
                <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                <li><a href="#education" data-nav-section="education">Education</a></li>
                <li><a href="#work" data-nav-section="work">Timeline</a></li>
                {/* <li><a href="#" data-nav-section="blog">Blog</a></li> 
                <li><a href="#contact" data-nav-section="contact">Contact</a></li>*/}
                <li><a href="https://twitter.com/FokoValdes" target="_blank"><i className="icon-twitter2" /></a></li>
              <li><a href="https://www.linkedin.com/in/foko-valdes/" target="_blank"><i className="icon-linkedin2" /></a></li>
              </ul>
            </div>
          </nav>
          <div className="colorlib-footer">
            <p><small>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                 Made with <i className="icon-heart" aria-hidden="true" /><br>

                 </br> Thanks to <a href="https://colorlib.com" target="_blank">Colorlib</a> for inspiration
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}  </small></p>
            <ul>
            
              
            </ul>
          </div>
        </aside>

      </React.Fragment>
    );
  }
}