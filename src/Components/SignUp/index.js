import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./SignUp.css";

const SignUp = () => {
  return (
    <React.Fragment>
    <div id="wrapper">
      <div className="container">
        <div className="phone-app-demo" />
        <div className="form-data">
          <form action="">
          <img className="img1" src="https://freepikpsd.com/file/2019/10/font-instagram-png-5-Transparent-Images.png" alt="logo"/>
          <h2>Sign up to see photos and videos from your friends.</h2>
          <button className="form-btn" type="submit">
              Log with Facebook
            </button>
            <span className="has-separator">Or</span>
            <input
              type="text"
              placeholder="Phone number or email address"
            />
            <input
              type="text"
              placeholder="Full Name"
            />
            <input
              type="text"
              placeholder="Username"
            />
            <input type="password" placeholder="Password" />
            <button className="form-btn" type="submit">
              Sign UP
            </button>
            <p>By signing up, you agree to our Terms, Data Policy and Cookie Policy.</p>
            </form>
            <div className="log_in">
            Have an account
            <Link to="/">Log in</Link>
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

export default SignUp;