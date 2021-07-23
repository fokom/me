import React, {Component} from 'react';

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        
        {/*<section className="colorlib-blog" data-section="blog">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Read</span>
                <h2 className="colorlib-heading">Recent Blog</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                <div className="blog-entry">
                  <a href="blog.html" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                  <div className="desc">
                    <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
                    <h3><a href="blog.html">Renovating National Gallery</a></h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                <div className="blog-entry">
                  <a href="blog.html" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                  <div className="desc">
                    <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
                    <h3><a href="blog.html">Wordpress for a Beginner</a></h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                <div className="blog-entry">
                  <a href="blog.html" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                  <div className="desc">
                    <span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i className="icon-bubble3" /> 4</small></span>
                    <h3><a href="blog.html">Make website from scratch</a></h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box">
                <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
              </div>
            </div>
          </div>
        </section>
        */}
        <section id="contact" className="colorlib-contact" data-section="contact">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Get in Touch</span>
                <h2 className="colorlib-heading">Contact</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-globe-outline" />
                  </div>
                  <div className="colorlib-text">
                    <p><a href="#">fokovaldes1@gmail.com</a></p>
                  </div>
                </div>
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-map" />
                  </div>
                  <div className="colorlib-text">
                    <p>157 Boko, Douala Cameroon</p>
                  </div>
                </div>
                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="colorlib-icon">
                    <i className="icon-phone" />
                  </div>
                  <div className="colorlib-text">
                    <p><a href="tel://">+237 675467571</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-md-push-1">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                    <form action>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject" />
                      </div>
                      <div className="form-group">
                        <textarea name id="message" cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
                      </div>
                      <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-send-message" defaultValue="Send Message" />
                      </div>
                    </form>
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