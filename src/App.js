import React, { Component } from 'react';
import { GithubState } from "./context/github/githubContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from "./components/users/User";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

//import Search from './components/users/Search';
import { Container } from '@material-ui/core';
import axios from 'axios';

const App = () => {
        return (
            <GithubState>
                <Router>
                    <div className='App'>
                        <Container fixed>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path="/user/:login" component={User} />
                            </Switch>
                        </Container>
                    </div>
                </Router>
            </GithubState>


        );
}

export default App;
