import React from 'react'
import "../assests/style/all.css"
import aboutLeft from "../assests/images/about-left-image.png"
import serviceIcon1 from "../assests/images/service-icon-01.png";
import serviceIcon2 from "../assests/images/service-icon-02.png";
import Footer from '../components/Footer';
const About = () => {
  return (
    <div id="about" className="about-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="left-image wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <img src={aboutLeft} alt="person graphic" />
            </div>
          </div>
          <div className="col-lg-8 align-self-center">
            <div className="services">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon">
                      <img
                        src={serviceIcon1}
                        alt="reporting"
                      />
                    </div>
                    <div className="right-text">
                      {/* <h4>Data</h4> */}
                      <p>
                        Mətninizin düzgün olmasını təmin edərək, sizə yüksək keyfiyyətli, professional mətn yazmaqda kömək edir.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="item wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.7s"
                  >
                    <div className="icon">
                      <img src={serviceIcon2} alt="" />
                    </div>
                    <div className="right-text">
                      <p>
                        Mətninizin doğru və düzgün olmasını sağlayaraq, oxucularınıza doğru bir təcrübə təqdim edir.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About