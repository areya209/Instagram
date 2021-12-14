import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Row, Col, Container } from 'reactstrap';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SignUp.css";

const SignUp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={4}></Col>
          <Col xs={4}>
            <div className="form_data2">
              <form action="">
                <img className="img1" src={require('././static/images/instlogo.png').default} alt="logo" />
                <p>Sign up to see photos and videos <br></br> from your friends.</p>
                <button className="form-btn" type="submit">
                  <FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: 'white' }} /> &nbsp; Log In with Facebook
                </button>
                <div className='orclass'>
                  <hr></hr>
                  <span className="has-separator">Or</span>
                  <hr></hr>
                </div>
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
                <a><Link to="/">
                <button className="form-btn" type="submit">
                  Sign up 
                </button>
                </Link></a>
                <p className='para'>By signing up, you agree to our Terms, Data Policy and Cookie Policy.</p>
              </form>
            </div>
            <div className="log_in">
              Have an account?
             &nbsp; <a><Link to="/">Log in</Link></a>
            </div>
            <div className="get-the-app2">
              <span>Get the app</span>
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
          <Col xs={4}></Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;