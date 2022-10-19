import React from "react";

const Skill = () => {
  return (
    <div>
      <section className="skills-section bg-color-2 sec-pad">
        <div className="bg-layer">
          <div className="bg-1"></div>
          <div className="bg-2"></div>
          <div className="bg-3"></div>
        </div>
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}
        ></div>
        <div className="image-layer">
          <figure className="image image-1">
            <img src="assets/images/icons/wind-1.png" alt="" />
          </figure>
        </div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
              <div className="content_block_2">
                <div className="content-box">
                  <div className="sec-title light">
                    <div className="title-top">
                      <div className="shape-box">
                        <span className="shape shape-1">\\</span>
                      </div>
                      <h6>Company Statistics</h6>
                    </div>
                    <h2>
                      For Over 08 Years in <br />
                      the Business
                    </h2>
                  </div>
                  <div className="text">
                    <p>
                      Our power of choice is untrammelled and when nothing
                      prevents our being able to do what we like best, every
                      pleasure is to be welcomed and every pain avoided certain
                      circumstances.
                    </p>
                  </div>
                  <div className="progress-inner">
                    <div className="progress-box">
                      <div className="bar-box">
                        <h6>Solar Energy</h6>
                        <div className="bar">
                          <div
                            className="bar-inner count-bar"
                            data-percent="62%"
                          ></div>
                        </div>
                      </div>
                      <div className="count-text">62%</div>
                    </div>
                    <div className="progress-box">
                      <div className="bar-box">
                        <h6>Wind Energy</h6>
                        <div className="bar">
                          <div
                            className="bar-inner count-bar"
                            data-percent="89%"
                          ></div>
                        </div>
                      </div>
                      <div className="count-text">89%</div>
                    </div>
                    <div className="progress-box">
                      <div className="bar-box">
                        <h6>Hydroelectric Energy</h6>
                        <div className="bar">
                          <div
                            className="bar-inner count-bar"
                            data-percent="75%"
                          ></div>
                        </div>
                      </div>
                      <div className="count-text">75%</div>
                    </div>
                  </div>
                  <div className="author-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
