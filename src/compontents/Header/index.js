import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink as Link } from 'react-router-hash-link';
import { faSearch, faHome, faPaperPlane, faPlusSquare, faCompass, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {


    return (
        <>
            <Container fluid>
                <Row id='header'>
                    <Col xs={1}>
                    </Col>
                    <Col xs={3} className='head1'>
                        <img className="image" src={require('././static/images/instlogo.png').default} alt="logo" />
                    </Col>
                    <Col xs={3} className='head2'>
                        <div className='search'>
                            <FontAwesomeIcon icon={faSearch} size="md" style={{ color: 'gray' }} /> <input type='search' placeholder='Search'></input>
                        </div>
                    </Col>
                    <Col xs={4} className='head3'>
                        <Link to="/home"> <FontAwesomeIcon icon={faHome} size="lg" style={{ color: 'gray' }} className='icons' /> </Link>
                        <Link to="/home"> <FontAwesomeIcon icon={faPaperPlane} size="lg" style={{ color: 'gray' }} className='icons' /></Link>
                        <Link to="/home"> <FontAwesomeIcon icon={faPlusSquare} size="lg" style={{ color: 'gray' }} className='icons' /></Link>                        <Link to="/home"> <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: 'gray' }} className='icons' /></Link>
                        <Link to="/profile"> <FontAwesomeIcon icon={faUser} size="lg" style={{ color: 'gray' }} className='icons' /></Link>
                    </Col>
                    <Col xs={1}>
                    </Col>
                </Row>
            </Container>


        </>
    );
};

export default Header;