import React from 'react';
import "../assests/style/loginPage.css";
import imageDecor from "../assests/images/illustration.png"
import {Link} from "react-router-dom";
const LoginPage = () => {
    return (
        <div className='loginPage'>
            <section className="container">
                <div className="login-container">
                    <div className="circle circle-one" />
                    <div className="form-container">
                        <img
                            src={imageDecor}
                            alt="illustration"
                            className="illustration"
                        />
                        <h1 className="opacity">Daxil ol</h1>
                        <form>
                            <input type="text" placeholder="İstifadəçi adı" />
                            <input type="password" placeholder="Şifrə" />
                            <button className="opacity">Təsdiqlə</button>
                        </form>
                        <div className="register-forget opacity">
                            <Link to="/signUp">Qeydiyyat</Link>
                            <a href="">Şifrəni unutdum</a>
                        </div>
                    </div>
                    <div className="circle circle-two" />
                </div>
                <div className="theme-btn-container" />
            </section>

        </div>
    )
}

export default LoginPage