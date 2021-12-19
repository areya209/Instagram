import React, { useState, useEffect, useParams } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookLogin from 'react-facebook-login';
import { Row, Col, Container } from 'reactstrap';
import Header from "../Header";
import Avatar from "@material-ui/core/Avatar";



function Loginfacebook() {
    document.title = 'Loginfacebook Page'


    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');

    const responseFacebook = (response) => {
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }

    return (
        <>
            {!login &&
                <FacebookLogin
                    appId="452919822846635"
                    autoLoad={true}
                    fields="name,email,picture"
                    scope="public_profile,user_friends"
                    callback={responseFacebook}
                    icon="fa-facebook" />
            }
            {login &&
                <Container fluid>
                    <Row>
                        <Header />
                    </Row>
                    <Row>
                        <Col xs={2} ></Col>
                        <Col xs={3} >
                            <div className='my_photo'>
                                <Avatar className="myimage" src={picture} alt="logo" size='giant'
                                />

                            </div>
                        </Col>
                        {login &&
                            <Col xs={4} className='my_data'>
                                <h2>{data.name}</h2>
                                <div className='counts'>
                                    <span>0 Posts</span>
                                    <span>0 Followers</span>
                                    <span>0 Following</span>
                                </div>

                                <h4></h4>
                                <p>My bio</p>
                            </Col>}
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
                            {/* <Post /> */}

                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                </Container>

            }


        </>
    );
}

export default Loginfacebook;




// import React, { useState } from 'react';
// import FacebookLogin from 'react-facebook-login';
// import { Card, Image } from 'react-bootstrap';


// function Loginfacebook() {

//     const [login, setLogin] = useState(false);
//     const [data, setData] = useState({});
//     const [picture, setPicture] = useState('');

//     const responseFacebook = (response) => {
//         console.log(response);
//         setData(response);
//         setPicture(response.picture.data.url);
//         if (response.accessToken) {
//             setLogin(true);
//         } else {
//             setLogin(false);
//         }
//     }



//     return (
//         <div class="container">
//             <Card style={{ width: '600px' }}>
//                 <Card.Header>
//                     {!login &&
//                         <FacebookLogin
//                             appId="921201001964201"
//                             autoLoad={true}
//                             fields="name,email,picture"
//                             scope="public_profile,user_friends"
//                             callback={responseFacebook}
//                             icon="fa-facebook" />
//                     }
//                     {login &&
//                         <Image src={picture} roundedCircle />
//                     }
//                 </Card.Header>
//                 {login &&
//                     <Card.Body>
//                         <Card.Title>{data.name}</Card.Title>
//                         <Card.Text>
//                             {data.email}
//                         </Card.Text>
//                     </Card.Body>
//                 }
//             </Card>
//         </div>
//     );
// }

// export default Loginfacebook;