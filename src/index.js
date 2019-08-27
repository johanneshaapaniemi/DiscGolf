import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Course from './Components/Course'
import Profile from './Components/Profile'
import * as serviceWorker from './serviceWorker';
import { Router, BrowserRouter, Route, Link } from "react-router-dom";

const routes = (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/Course" component={Course} />
            <Route exact path="/Profile" component={Profile} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
