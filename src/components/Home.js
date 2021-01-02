import { React, useState } from 'react';
import { Col, Row, Container, Image, Card, Button, Alert } from 'react-bootstrap'
import appImage from '../images/upm_app.png'
import '../styles/Main.css';
import logo from '../images/upm_logo.png'
import { Switch, Route, HashRouter, useHistory } from 'react-router-dom';

const Home = (props) => {

    //to be loaded dynamically in the future...
    const apps = ["Application 1", "Application 2", "Application 3"];
    const history = useHistory();

    return (
        <Container>
            <Container className="rounded " style={{ marginTop: "20px", backgroundColor: "#F4F6F6", paddingTop: "20px", paddingBottom: "20px" }}>
                <Row>
                    <Col sm={8}>
                        <h2>Welcome to UPM User Admin Panel tool</h2>
                    </Col>
                    <Col sm={4}>
                        <Image src={logo} width="200px" height="51px" />
                    </Col>
                </Row >
            </Container>
            <Container className="rounded text-center" style={{ marginTop: "50px" }}>
                <Row>
                    <Col>
                        <Alert key="alert1" variant="success">
                            Select one of below applications to start.
                        </Alert>
                    </Col>
                </Row>
            </Container>
            <Container style={{ paddingTop: "10px" }}>
                <Row>
                    {apps && apps.length ? apps.map((application, index) => {
                        return (
                            <Col key={index} sm={4} style={{ paddingLeft: "20px" }}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Header className="text-center text-bold">{application}</Card.Header>
                                    <div className="col text-center">
                                        <Card.Img variant="top" style={{ width: "100px", height: "100px", marginTop: "20px" }} src={appImage} />
                                    </div>
                                    <Card.Body>
                                        <div className="col text-center">
                                            <Button name={application} className="center" onClick={(event) => props.updateApplication(event.target.name, history)} variant="primary">Manage users</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }) : ''
                    }
                </Row>
            </Container>
        </Container >
    )
};

export default Home;