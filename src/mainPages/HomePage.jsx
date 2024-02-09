import React from 'react';
import homePageImg from '../assests/images/4426506.png';
import homePageImg2 from '../assests/images/img2.png';
import '../assests/style/homePage.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SlideItem from '../components/SlideItem';

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="bg-img"></div>
      <div className="carousel-container w-100 h-100">
        <Carousel
          autoPlay
          interval={3000}
          infiniteLoop
          showStatus={false}
          showThumbs={true}
          showIndicators={true}
        >
          <SlideItem
            desc="Azərbaycan dilində yazı səhvlərini yoxlayan və düzəldən veb sayt."
            img={homePageImg}
          />
          <SlideItem
            desc="Yazılarınızı səhvsiz şəkildə tərtib edin və dilinizi daha doğru ifadə edin."
            img={homePageImg2}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
