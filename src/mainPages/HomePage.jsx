import React from 'react';
import '../assests/style/homePage.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import homeImg from "../assests/images/pic-a.svg"
import "../assests/style/all.css"
import Corrector from './Corrector';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <>

      <div className='header w-100 d-flex align-items-center justify-content-around'>
        <h3 className='logo'>
          <span className='first-word'>Doğru</span>
          <span className='second-word'>Düzgün</span>
        </h3>

        <Link className='aboutus' to="team">Haqqımızda</Link>

      </div>


      {/* ***** Header Area End ***** */}
      <div
        className="main-banner wow fadeIn d-flex align-items-center flex-column"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >

        <div className="my mt-5">
          <h3 className='first-text mt-5 text-center'>Hörmətli ziyarətçi, süni intellekt əsaslı redaktora xoş gəlmisiniz!</h3>


          <Corrector />



          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6 align-self-center">
                    <div
                      className="left-content header-text wow fadeInLeft"
                      data-wow-duration="1s"
                      data-wow-delay="1s"
                    >
                      <h6>Doğru-Düzgün</h6>
                      <h2 className='description'>
                        Mətnlərinizin <em>düzgün</em> yazılmasına kömək edən tətbiqimizlə dil səhvlərinizi
                        <span> asanlıqla</span> düzəldin.
                      </h2>
                      <p>
                        Azərbaycan dilindən istifadə edən istifadəçilər üçün
                        mətnlərinizin səhv və düzgün yazılmışlığını yoxlamaq üçün asan və effektiv bir veb sayt.
                      </p>

                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="right-image wow fadeInRight"
                      data-wow-duration="1s"
                      data-wow-delay="0.5s"
                    >
                      <img
                        src={homeImg}
                        alt="team meeting"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
