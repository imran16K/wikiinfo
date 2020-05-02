import React, { useContext } from "react";
import UserItem from "./Useritem";
import Spinner from "../layout/Spinner";
import PropTypes from 'prop-types';
import {AppContext, GithubContext, useAppContext} from "../../context/github/githubContext";

const Users = () => {

    const githubContext = useContext(GithubContext)

    const { users, loading } = githubContext;


    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
};

const userStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
};

export default Users