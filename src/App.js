import React from 'react';
import Header from './components/Header/Header';
import Cover from './components/Cover/Cover';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-content">
        <div>
          <Cover />
          <div className="section" id="about">
            <div className="container">
              <div className="card" data-aos="fade-up" data-aos-offset="10">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="card-body">
                      <div className="h4 mt-0 title">About</div>
                      <p>Hello! I am Anthony Barnett. Web Developer, Graphic Designer and Photographer.</p>
                      <p>Meticulous Front-end developer with 5+ years of experience in designing and optimizing
                      state-of-the-art, responsive, and feature-rich websites. Leverage required skills to collaborate
                      with
                      clients on requirements and execution of ideas in order to deliver efficient start to finish
                    websites. Specializes in Javascript, Angular, and Reactjs.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="card-body">
                      <div className="h4 mt-0 title">Basic Information</div>
                      <div className="row mt-3">
                        <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                        <div className="col-sm-8">chandrika14oct@gmail.com</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
                        <div className="col-sm-8">(226) 910-0307</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
                        <div className="col-sm-8">10, Coronation Dr
                      Scarborough, ON, M1E2H1</div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-4"><strong className="text-uppercase">Language:</strong></div>
                        <div className="col-sm-8">English, Hindi</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="skill">
            <div className="container">
              <div className="h4 text-center mb-4 title">Professional Skills</div>
              <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">JavaScript</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                            data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                            aria-valuemax="100" style={{width: '90%'}}></div><span className="progress-value">90%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">AngularJs</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                            data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                            aria-valuemax="100" style={{width: '80%'}}></div><span className="progress-value">80%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">ReactJs</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                            data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                            aria-valuemax="100" style={{width: '95%'}}></div><span className="progress-value">95%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">Redux</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                            data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                            aria-valuemax="100" style={{width: '90%'}}></div><span className="progress-value">90%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">Angular</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                            data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                            aria-valuemax="100" style={{width: '95%'}}></div><span className="progress-value">95%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">TypeScript</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                            data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                            aria-valuemax="100" style={{width: '85%'}}></div><span className="progress-value">85%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">Ecmascript</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                            data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                            aria-valuemax="100" style={{width: '85%'}}></div><span className="progress-value">85%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">HTML5</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                            data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                            aria-valuemax="100" style={{width: '90%'}}></div><span className="progress-value">90%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">CSS</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                            data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                            aria-valuemax="100" style={{width: '80%'}}></div><span className="progress-value">80%</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress-container progress-primary"><span className="progress-badge">Bootstrap</span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                            data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                            aria-valuemax="100" style={{width: '85%'}}></div><span className="progress-value">85%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="h4 text-center mb-4 title">Portfolio</div>
                  <div className="nav-align-center">
                    <ul className="nav nav-pills nav-pills-primary" role="tablist">
                      <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#web-development"
                        role="tablist"><i className="fa fa-laptop" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-content gallery mt-5">
                <div className="tab-pane active" id="web-development">
                  <div className="ml-auto mr-auto">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <a href="#web-development">
                            <figure className="cc-effect"><img src="images/ecommerce.PNG" alt="Image" />
                              <figcaption>
                                <div className="h4">E-commerce Project</div>
                                <p>Web Development</p>
                              </figcaption>
                            </figure>
                          </a></div>
                        <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <a href="#web-development">
                            <figure className="cc-effect"><img src="images/holly.png" alt="Image" />
                              <figcaption>
                                <div className="h4">Food Order Project</div>
                                <p>Web Development</p>
                              </figcaption>
                            </figure>
                          </a></div>
                      </div>
                      <div className="col-md-6">
                        <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <a href="#web-development">
                            <figure className="cc-effect"><img src="images/remotii.PNG" alt="Image" />
                              <figcaption>
                                <div className="h4">Remote Tracking Project</div>
                                <p>Web Development</p>
                              </figcaption>
                            </figure>
                          </a></div>
                        <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <a href="#web-development">
                            <figure className="cc-effect"><img src="images/Optimized-iternary.PNG" alt="Image" />
                              <figcaption>
                                <div className="h4">Itinerary Planner Project</div>
                                <p>Web Development</p>
                              </figcaption>
                            </figure>
                          </a></div>
                      </div>
                      <div className="col-md-6">
                        <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <a href="#web-development">
                            <figure className="cc-effect"><img src="images/label.png" alt="Image" />
                              <figcaption>
                                <div className="h4">Print Online Custome Lables, Sticker</div>
                                <p>Web Development</p>
                              </figcaption>
                            </figure>
                          </a></div>
                      </div>
                      <div className="col-md-6">
                        <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <a href="#web-development">
                            <figure className="cc-effect"><img src="images/social.png" alt="Image" />
                              <figcaption>
                                <div className="h4">Social Networking</div>
                                <p>Web Development</p>
                              </figcaption>
                            </figure>
                          </a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="experience">
            <div className="container cc-experience">
              <div className="h4 text-center mb-4 title">Work Experience</div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body cc-experience-header">
                      <p>April 2019 - Present</p>
                      <div className="h5">3i Infotech Consultancy Services Ltd, Mumbai, India</div>
                    </div>
                  </div>
                  <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body">
                      <div className="h5">Senior Software Engineer</div>
                      <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis,
                      tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend
                      primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros
                      pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium
                    molestie ultricies sollicitudin dui.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body cc-experience-header">
                      <p>May 2017 - March 2019</p>
                      <div className="h5">Birlasoft Limited, Mumbai, India</div>
                    </div>
                  </div>
                  <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body">
                      <div className="h5">Senior Software Engineer</div>
                      <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis,
                      tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend
                      primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros
                      pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium
                    molestie ultricies sollicitudin dui.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body cc-experience-header">
                      <p>May 2015 - April 2017</p>
                      <div className="h5">Optimus Information, Noida, India</div>
                    </div>
                  </div>
                  <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body">
                      <div className="h5">Software Engineer</div>
                      <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis,
                      tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend
                      primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros
                      pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium
                    molestie ultricies sollicitudin dui.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body cc-experience-header">
                      <p>Nov 2013 - Nov 2014</p>
                      <div className="h5">Finoit Technologies Pvt Ltd, Noida, India</div>
                    </div>
                  </div>
                  <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body">
                      <div className="h5">Intern</div>
                      <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis,
                      tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend
                      primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros
                      pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium
                    molestie ultricies sollicitudin dui.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container cc-education">
              <div className="h4 text-center mb-4 title">Education</div>
              <div className="card">
                <div className="row">
                  <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body cc-education-header">
                      <p>2009 - 2013</p>
                      <div className="h5">Bachelor's Degree</div>
                    </div>
                  </div>
                  <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body">
                      <div className="h5">Bachelor of Computer Science</div>
                      <p className="category">Dr. A.P.J. Abdul Kalam Technical University, Lucknow</p>
                      <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis,
                      tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend
                      primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros
                      pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium
                    molestie ultricies sollicitudin dui.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="reference">
            <div className="container cc-reference">
              <div className="h4 mb-4 text-center title">References</div>
              <div className="card" data-aos="zoom-in">
                <div className="carousel slide" id="cc-Indicators" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li className="active" data-target="#cc-Indicators" data-slide-to="0"></li>
                    <li data-target="#cc-Indicators" data-slide-to="1"></li>
                    <li data-target="#cc-Indicators" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-1.jpg"
                          alt="Image" />
                          <div className="h5 pt-2">Deepti</div>
                          <p className="category">Ass. Director / Crisil Ltd</p>
                        </div>
                        <div className="col-lg-10 col-md-9">
                          <p> I have worked with Chandrika for 3 years on few large and complex and UI critical
                          projects. We are very happy with the timely work, quality of output, attention to detail and
                          professionalism that she has shown over the years. Across the board everyone enjoyed working
                          with Chandrika. She pays minute attention to improve aesthetics as well as user experience. She
                          has not only done exceptional work based on our requirements but has also contributed immensely
                          to UI standardisation policies, performance optimisation, UI code reviews, evaluations of
                          different framework and components. Her suggestions and improvements have helped us to a create
                          stable platform. The market has very few good Angular experts and I am proud to say that I am
                        working with one.</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-2.jpg"
                          alt="Image" />
                          <div className="h5 pt-2">Braiden</div>
                          <p className="category">CEO / Creativem</p>
                        </div>
                        <div className="col-lg-10 col-md-9">
                          <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est
                          porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam
                          luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper,
                          laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient
                        fringilla rhoncus eleifend.</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 cc-reference-header"><img src="images/reference-image-3.jpg"
                          alt="Image" />
                          <div className="h5 pt-2">Alexander</div>
                          <p className="category">CEO / Webnote</p>
                        </div>
                        <div className="col-lg-10 col-md-9">
                          <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est
                          porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam
                          luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper,
                          laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient
                        fringilla rhoncus eleifend.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section" id="contact">
            <div className="cc-contact-information" style={{backgroundImage: "url('images/staticmap.png')"}}>
              <div className="container">
                <div className="cc-contact">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="card mb-0" data-aos="zoom-in">
                        <div className="h4 text-center title">Contact Me</div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="card-body">
                              <form action="https://formspree.io/your@email.com" method="POST">
                                <div className="p pb-3"><strong>Feel free to contact me </strong></div>
                                <div className="row mb-3">
                                  <div className="col">
                                    <div className="input-group"><span className="input-group-addon"><i
                                      className="fa fa-user-circle"></i></span>
                                      <input className="form-control" type="text" name="name" placeholder="Name"
                                        required="required" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col">
                                    <div className="input-group"><span className="input-group-addon"><i
                                      className="fa fa-file-text"></i></span>
                                      <input className="form-control" type="text" name="Subject" placeholder="Subject"
                                        required="required" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col">
                                    <div className="input-group"><span className="input-group-addon"><i
                                      className="fa fa-envelope"></i></span>
                                      <input className="form-control" type="email" name="_replyto" placeholder="E-mail"
                                        required="required" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col">
                                    <div className="form-group">
                                      <textarea className="form-control" name="message" placeholder="Your Message"
                                        required="required"></textarea>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <button className="btn btn-primary" type="submit">Send</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="card-body">
                              <p className="mb-0"><strong>Address </strong></p>
                              <p className="pb-2">10, Coronation Dr
                            Scarborough, ON, M1E2H1</p>
                              <p className="mb-0"><strong>Phone</strong></p>
                              <p className="pb-2">(226) 910-0307</p>
                              <p className="mb-0"><strong>Email</strong></p>
                              <p>chandrika14oct@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
