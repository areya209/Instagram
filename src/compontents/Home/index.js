import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Header from "../Header";
import "./Home.css";
import Post from "./Post";
import Footer from "../Footer";

function Home() {
    document.title = 'Home Page'

    return (
        <>
            <Container fluid>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Col xs={12} >
                        <Post />
                        <Post />
                    </Col>
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </>

    )
}

export default Home

