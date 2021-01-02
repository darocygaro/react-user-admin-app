import React, { useState } from 'react'
import Home from './Home.js'
import Header from './Header.js'
import Footer from './Footer.js'
import UsersList from './UsersList.js'
import { Switch, Route, HashRouter, useHistory } from 'react-router-dom';
import { Row, Container, Card } from 'react-bootstrap';
import { Redirect } from "react-router-dom";



function Main() {
    const [application, setApplication] = useState('');

    const updateApplication = (appName, history) => {
        //console.log("APP SET! Passed val: " + appName)
        //console.log("History is: " + history)

        setApplication(appName);
        history.push('/userslist');
    }

    return (
        <React.Fragment>
            <Header />
            <HashRouter>
                <Switch>
                    <Route
                        exact
                        path="/home"
                        render={(props) =>
                            <Home updateApplication={updateApplication} />
                        }
                    />
                    <Route
                        exact
                        path="/userslist"
                        render={(props) =>
                            <UsersList applicationName={application} />
                        }
                    />

                    <Redirect from="/" to="/home" />
                </Switch>
            </HashRouter>
            <Footer />
        </React.Fragment>
    );
}

export default Main;
