import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./Login.css";

const Login = () => {
  return (
    <React.Fragment>
    <div id="wrapper">
      <div className="container">
        <div className="phone-app-demo" />
        <div className="form-data">
          <form action="">
          <img className="img1" src="https://freepikpsd.com/file/2019/10/font-instagram-png-5-Transparent-Images.png" alt="logo"/>
          <input
              type="text"
              placeholder="Phone number, username, or email"
            />
            <input type="password" placeholder="Password" />
            <button className="form-btn" type="submit">
              Log in
            </button>
            <span className="has-separator">Or</span>
            <a href="/some/valid/uri" className="facebook-login">
              <i className="fab fa-facebook" /> Log in with Facebook
              </a>
            <a className="password-reset" href="/some/valid/uri">
              Forgot password?
            </a>
          </form>
          <div className="sign-up">
            Don't an account?
            <Link to="/sign">Sign up</Link>
        
            
          </div>
          <div className="get-the-app">
            <span>Get the app</span>
            <div className="badge">
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                alt="android App"
              />
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                alt="ios app"
              />
              
            </div>
            </div>
            </div>
            </div>
            
      <footer>
        <div className="container">
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="/some/valid/uri">About Us</a>
              </li>
              <li>
                <a href="/some/valid/uri">Support</a>
              </li>
              <li>
                <a href="/some/valid/uri">Jobs</a>
              </li>
              <li>
                <a href="/some/valid/uri">Privacy</a>
              </li>
              <li>
                <a href="/some/valid/uri">Terms</a>
              </li>
              <li>
                <a href="/some/valid/uri">Profiles</a>
              </li>
              <li>
                <a href="/some/valid/uri">Languages</a>
              </li>
            </ul>
          </nav>
          <div className="copyright-notice">&copy; 2019 Complaints</div>
        </div>
      </footer>
            </div>
  </React.Fragment>
);
};

export default Login;