import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import "./Profile.css";
import Header from "../Header";
import WOW from 'wowjs';
import Footer from '../Footer'


const Editprofile = () => {

    document.title = 'EditProfile Page'

    // const [profile, setProfile] = useState([]);
    // const { id } = useParams();

    // useEffect(() => {
    //     // IDuser()
    //     IDprofile()
    // }, []);

    // const IDprofile = async () => {
    //     const { data } = await axios.get(`http://127.0.0.1:8000/instgram/profile/`)

    //     console.log(data)
    //     setProfile(data)
    // }


    new WOW.WOW({
        live: false
    }).init();


    return (
        <>
            <Container fluid>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Col xs={2} ></Col>
                    <Col xs={8} >
                        <div className="my_data_edit wow bounceInUp " data-wow-delay="3s">
                            <div className='left_div'>
                                <img className="img_edit wow bounceInDown " data-wow-delay="6s" src={require('./static/images/instgram.jpg').default} alt="logo" />

                            </div>
                            <form action=''>
                                <div className='sub_data'>
                                    <label for='first_name'>First Name</label>
                                    <input type='text' name='first_name' onChange='' value='' />
                                </div>
                                <div className='sub_data'>
                                    <label for='last_name'>Last Name</label>
                                    <input type='text' name='last_name' onChange='' value='' />
                                </div>
                                <div className='sub_data'>
                                    <label for='email'>Email</label>
                                    <input type='email' name='email' onChange='' value='' />
                                </div>
                                <div className='sub_data'>
                                    <label for='username'>User Name</label>
                                    <input type='text' name='username' onChange='' value='' />
                                </div>
                                <div className='sub_data'>
                                    <label for='bio'>Bio</label>
                                    <textarea name='bio' cols='32' rows='4' onChange='' value=''></textarea>
                                </div>
                                <div className='sub_data'>
                                    <label for='myphoto'>Choose Your Photo</label>
                                    <input type='file' name='myphoto' onChange='' value='' />
                                </div>

                                <input type='submit' value='Update Your Data' onSubmit='/profile' />
                            </form>


                        </div>

                    </Col>
                    <Col xs={2}></Col>
                </Row>
                <Row>
                    <Footer />
                </Row>


            </Container>


        </>
    );
};

export default Editprofile;

