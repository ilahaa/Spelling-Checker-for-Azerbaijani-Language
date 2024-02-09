import React from 'react'

const SlideItem = (props) => {
    return (
        <div className="slide">
            <div className="home-main row mt-5">
                <div className="homeLeft 
      d-flex justify-content-center align-items-center flex-column 
      col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <h3>{props.desc}</h3>
                </div>
                <div className="homeRight
       d-flex justify-content-center align-items-center
        col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <img className='homeMainImg mt-5' src={props.img} alt="default" />
                </div>
            </div>
        </div>
    )
}

export default SlideItem