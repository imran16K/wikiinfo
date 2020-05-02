import React, { useState, useEffect, useContext } from "react";
import { GithubContext } from "../../context/github/githubContext";
import Navbar from 'react-bootstrap/Navbar'

import PropTypes from "prop-types";


const NavBar = () => {
    const githubContext = useContext(GithubContext)

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alert('please enter something');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }

    };

    const onChange = e => setText(e.target.value);

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                github finder
            </Navbar.Brand>
            <form onSubmit={onSubmit}>
                <input type={"text"} value={text} onChange={onChange}/>
                {' '}
                <button>search</button>
            </form>
        </Navbar>
    )
};
NavBar.propTypes = {
    //searchUsers: PropTypes.func.isRequired,
    //clearUsers: PropTypes.func.isRequired,
    //showClear: PropTypes.bool.isRequired
};

export default NavBar;