import React from 'react'
import "../assests/style/team.css"
import member1 from "../assests/images/20173010105222_23459600.jpg"
import member2 from "../assests/images/second.jpeg"
import member3 from "../assests/images/first.jpeg"
import member4 from "../assests/images/profile.webp"
import Footer from '../components/Footer'
const Team = () => {
    return (
        <>
        <div className="team-container">
            <h3>Komandamız</h3>
            <div className="row container">
                <div className="col-md-3 col-sm-6">
                    <div className="our-team">
                        <div className="pic">
                            <img src={member1} />
                        </div>
                        <div className="team-content">
                            <h3 className="title">Samir Rüstəmov</h3>
                            <span className="post">Layihə Rəhbəri</span>
                            <ul className="social">
                                <li>
                                    <a href="#">
                                        <i className="fab fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-google-plus" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="our-team">
                        <div className="pic">
                            <img src={member2} />
                        </div>
                        <div className="team-content">
                            <h3 className="title">Elnarə Məmmədli</h3>
                            <span className="post">İcraçı</span>
                            <ul className="social">
                                <li>
                                    <a href="#">
                                        <i className="fab fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-google-plus" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="our-team">
                        <div className="pic">
                            <img src={member3} />
                        </div>
                        <div className="team-content">
                            <h3 className="title">İlaha Həsənli</h3>
                            <span className="post">İcraçı</span>
                            <ul className="social">
                                <li>
                                    <a href="#">
                                        <i className="fab fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-google-plus" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="our-team">
                        <div className="pic">
                            <img src={member4} />
                        </div>
                        <div className="team-content">
                            <h3 className="title">Humay İsmayılzadə</h3>
                            <span className="post">İcraçı</span>
                            <ul className="social">
                                <li>
                                    <a href="#">
                                        <i className="fab fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-google-plus" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>

    )
    
}

export default Team