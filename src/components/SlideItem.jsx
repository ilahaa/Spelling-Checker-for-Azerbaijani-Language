import React from 'react'

const SlideItem = (props) => {
    return (
        <div className="slide">
            <div className="homeLeft 
      d-flex justify-content-center align-items-center flex-column 
      col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <h3>{props.desc}</h3>
                <div className="checkNowBtn mt-3">İndi yoxla</div>
            </div>
        </div>
    )
}

export default SlideItem