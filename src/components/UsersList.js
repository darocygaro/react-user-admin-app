import React, { useState, useEffect } from 'react';
import { Container, Alert } from 'react-bootstrap';
import BreadCrumb from './Breadcrumb';
import 'bootstrap/dist/css/bootstrap.css';

const UsersList = (props) => {

    const [contacts, setContacts] = useState([{}]);
    const breadcrumbLinks = [{ link: "#/home", displayText: "Home", active: false }, { link: "", displayText: props.applicationName, active: true }, { link: "", displayText: "Users List", active: true }];

    useEffect(() => {

        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                setContacts(data)
            })
            .catch(console.log);


    }, []);

    console.log('Application is: ' + props.applicationName);

    if (!props.applicationName) {
        return (
            <Container style={{ marginTop: "20px" }} key="userslistalert1">
                <Alert key="alert1" variant="danger">
                    Application name not specified. Please go back to <Alert.Link href="#/home">home page</Alert.Link> and pick the application for which you want to manage users for.
                </Alert>
            </Container>
        )
    }

    return (
        <Container key="userslist1">
            <BreadCrumb breadcrumbData={breadcrumbLinks} />
            <h1>Users list page...</h1>
            <h2>Application name: {props.applicationName}</h2>
            <section className="border p-4 text-center mb-4">
                {contacts && contacts.length ?
                    contacts.map((contact, index) => {
                        return <div key={index} className="row bg-light "><div className="col-sm">{contact.name}</div></div>
                    }) : ''}
            </section>
        </Container>
    )
};

export default UsersList;