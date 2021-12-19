import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import "./Home.css";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";

function Post() {


    const [post, setpost] = useState([]);

    useEffect(() => {

        // IDuser()
        IDpost()
    }, []);

    const IDpost = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/instgram/postid/1`)

        console.log(data)
        setpost(data)


    }
  
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={1} > </Col>
                    <Col xs={6} >
                        <div className="post">
                            <div className="post_header">
                                <Avatar
                                    className="post_avatar"
                                    alt="userimage"
                                    src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" />
                                <h2 className="post_user"> username</h2>
                            </div>
                            <img className="post_image" src="https://cdn-images-1.medium.com/max/1200/1*dMSWcBZCuzyRDeMr4uE_og.png" alt="post" />

                            <div className="post_like" >

                            </div>
                            <h2 className="post_text"> <strong> username: </strong> {post.image_caption}</h2>
                            <form >
                                <input
                                    className="post_input"
                                    type="text"
                                    placeholder="Add Comment ..."
                                />
                                <button
                                    className="post_button"
                                    type="submit"
                                >
                                    post
              </button>
                            </form>

                        </div>
                    </Col>
                    <Col xs={4} >
                    </Col>
                    <Col xs={1} ></Col>
                </Row>
            </Container>
        </>

    )
}

export default Post;