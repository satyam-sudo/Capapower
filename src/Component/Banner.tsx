import React from 'react'

const Banner = () => {
  return (
    <>
        <section className="banner-section centred">
            <div className="banner-carousel owl-theme owl-carousel owl-dots-none">
                <div className="slide-item">
                    <div className="image-layer" style={{backgroundImage:"url('https://img.freepik.com/free-photo/high-voltage-post-high-voltage-tower_1127-3243.jpg?w=1060&t=st=1663135079~exp=1663135679~hmac=341597150ce7f8e88895c5695a567721020e0c5aa60dbf828fd4328c9c203cad')"}}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h1>Bright <br />Alternative</h1>
                            <h6>Empowering our future with solar energy.</h6>
                            <div className="btn-box">
                                <a href="index-2.html" className="theme-btn btn-one"><i className="flaticon-right-arrow"></i>Read More</a>
                            </div>
                            <span className="big-text">Energy</span>
                        </div>  
                    </div>
                </div>
                <div className="slide-item">
                    <div className="image-layer" style={{backgroundImage:"url('https://powertronups.co.in/assets/img/main-banner-image/3.jpg')"}}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h1>Turn to <br />solar power</h1>
                            <h6>Today’s resource for a brighter tomorrow.</h6>
                            <div className="btn-box">
                                <a href="index-2.html" className="theme-btn btn-one"><i className="flaticon-right-arrow"></i>Read More</a>
                            </div>
                            <span className="big-text">Green</span>
                        </div> 
                    </div>
                </div>
                <div className="slide-item">
                    <div className="image-layer" style={{backgroundImage:"url(assets/images/banner/banner-3.jpg)"}}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h1>Power of <br />Wind Energy</h1>
                            <h6>We provide clean energy, the wind energy.</h6>
                            <div className="btn-box">
                                <a href="index-2.html" className="theme-btn btn-one"><i className="flaticon-right-arrow"></i>Read More</a>
                            </div>
                            <span className="big-text">Batteries</span>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner