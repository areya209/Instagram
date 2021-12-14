import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Login.css";

const Login = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} id='leftside'>
            <img className="img" src={require('././static/images/inst1.jpg').default} alt="logo" />
          </Col>
          <Col xs={6}>
            <div className="form_data">
              <form action="">
                <img className="img1" src={require('././static/images/instlogo.png').default} alt="logo" />

                <input
                  type="text"
                  placeholder="Phone Number, UserName, or Email"
                />
                <input type="password" placeholder="Password" />
                <a><Link to="/home">
                  <button className="form-btn" type="submit">
                    Log In
                </button>
                </Link></a>
                <br></br>
                <div className='orclass'>
                  <hr></hr> <span className="has-separator">Or</span> <hr></hr>
                </div>
                <a href="https://www.facebook.com" className="facebook-login">
                  <FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: 'slateblue' }} /> &nbsp; Log in with Facebook
              </a> <br></br>
                <a className="password-reset" href="/some/valid/uri">
                  Forgot password?
            </a>
              </form>
            </div>
            <div className="sign-up">
              Don't an account?
               <a><Link to="/sign">Sign up</Link></a>
            </div>
            <div className="get-the-app">
              <span>Get the app</span> <br></br>
              <div className="badge">
                <img
                  className="img2" src={require('././static/images/google_play.png').default}
                  alt="android App"
                />
                <img
                  className="img3" src={require('././static/images/app_store.png').default}
                  alt="ios app"
                />

              </div>
            </div>

          </Col>
        </Row>
      </Container>


    </>
  );
};

export default Login;