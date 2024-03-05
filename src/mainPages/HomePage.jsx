import React from 'react';
import homePageImg from '../assests/images/4426506.png';
// import homePageImg2 from '../assests/images/img2.png';
import homePageImg2 from "../assests/images/mainimg.png"
import '../assests/style/homePage.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SlideItem from '../components/SlideItem';
import rhombus from "../assests/images/rhombus-shape.png"

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="bg-img">
        <img className='shape-img' src={rhombus} alt="" />
      </div>
      <div className="carousel-container h-100 dark">
        <Carousel
          autoPlay
          interval={3000}
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
        >
          <SlideItem
            desc="Azərbaycan dilində yazı səhvlərini yoxlayan və düzəldən veb sayt."
          />
          <SlideItem
            desc="Yazılarınızı səhvsiz şəkildə tərtib edin və dilinizi daha doğru ifadə edin."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
