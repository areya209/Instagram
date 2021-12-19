import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import "./Profile.css";
import Header from "../Header";
import Post from '../Home/Post';
import Avatar from "@material-ui/core/Avatar";
import { HashLink as Link } from 'react-router-hash-link';
import AuthContext from '../Auth/AuthContext';
import Footer from '../Footer'



const Profile = () => {

    document.title = 'Profile Page'

    const [profile, setProfile] = useState([]);
    const { id } = useParams();
    // const { logoutUser } = useContext(AuthContext);

    useEffect(() => {
        IDprofile()
    }, []);

    const IDprofile = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/instgram/profile/`)

        console.log(data)
        setProfile(data)
    }



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
                            <Avatar className="myimage" src={require('././static/images/inst1.jpg').default} alt="logo" />
                        </div>
                    </Col>

                    <Col xs={4} className='my_data'>
                        <div className='data_edit'>
                            <h3>UserName</h3>
                            <Link to='/editprofile'> <button>Edit Profile</button></Link>
                            <Link to='/logout'> <button onClick='logoutUser' className='bg-danger'>Logout</button></Link>
                        </div>
                        <div className='counts'>
                            <span>0 Posts</span>
                            <span>0 Followers</span>
                            <span>0 Following</span>
                        </div>

                        <h5>First Name</h5> &nbsp;
                        <h5>Last Name</h5>
                        <p>My Bio</p>
                        {/* <p>{profile.bio}</p> */}
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
                        <div className='img_post'>
                            <img className="myimage" src={require('././static/images/inst1.jpg').default} alt="logo" />
                            <img className="myimage" src={require('././static/images/inst1.jpg').default} alt="logo" />
                            <img className="myimage" src={require('././static/images/inst1.jpg').default} alt="logo" />
                        </div>

                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>


        </>
    );
};

export default Profile;