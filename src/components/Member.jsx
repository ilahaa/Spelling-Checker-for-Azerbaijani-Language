import React from 'react'
import "../assests/style/aboutUs.css"
const Member = (props) => {
    return (
        <div className="our-team">
            <img src={props.memberImg} alt="" />
            <div className="team-content">
                <h3 className="title">{props.name}</h3>
                <span className="post">{props.job}</span>
                <ul className="social-links">
                    <li>
                        <a href="#">
                            <i className="fab fa-facebook" />{" "}
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-twitter" />{" "}
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-linkedin" />{" "}
                        </a> 
                    </li>
                </ul>
            </div>
        </div>


    )
}

export default Member