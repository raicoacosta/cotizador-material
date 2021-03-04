import React from 'react'

import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";


export const AppRouter = () => {

    var hist = createBrowserHistory('');

    return (
        <Router history={hist}>
            <Switch>
                <Route path="/landing-page" component={LandingPage} />
                <Route path="/profile-page" component={ProfilePage} />
                <Route path="/login-page" component={LoginPage} />
                <Route path="/" component={Components} />
            </Switch>
        </Router>
    )
}
