import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import "./Profile.css";
import Header from "../Header";
import Post from '../Home/Post'


const Profile = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Col xs={2} ></Col>
                    <Col xs={3} >
                        <div className='my_photo'>
                            <img className="myimage" src={require('././static/images/inst1.jpg').default} alt="logo" />
                        </div>
                    </Col>

                    <Col xs={4} className='my_data'>
                        <h2>UserName</h2>
                        <div className='counts'>
                            <span>Posts Number</span>
                            <span>Followers Number</span>
                            <span>Following Number</span>
                        </div>

                        <h4>Full Name</h4>
                        <p>My Bio</p>
                    </Col>
                    <Col xs={3}></Col>
                </Row>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}> <hr></hr></Col>
                    <Col xs={1}></Col>
                </Row>

                <Row>
                    <Col xs={1}></Col>
                    <Col xs={10}>
                        <Post />

                    </Col>
                    <Col xs={1}></Col>
                </Row>
            </Container>


        </>
    );
};

export default Profile;