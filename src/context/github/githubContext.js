import React, {createContext, useReducer, useState} from 'react';
import githubReducer from "./githubReducer";
import { SEARCH_USERS, GET_REPOS, SET_LOADING, GET_USER } from "../types";
import axios from "axios";

let githubClientId;
let githubclientSecret;

if (process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubclientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubclientSecret = process.env.GITHUB_CLIENT_SECRET;
}

//creating the context for state management across all components
export const GithubContext = createContext();

export const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
    //setloading dispatch
    const setLoading = () => dispatch({ type: SET_LOADING })
    //search users
    const searchUsers = async text => {
        setLoading()
        const res = await axios.get(
            `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubclientSecret}`
        );
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    }
    //get user
    const getUser = async username => {
        const res = axios.get(
            `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubclientSecret}`
        )
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }
    //get repositories for user
    const getUserRepos = async username => {
        const res = axios.get(
            `https://api.gtihub.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubclientSecret}`
        )
        dispatch({
            type: GET_REPOS,
            dispatch: res.data
        })
    }

    return (
        <GithubContext.Provider value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            getUser,
            getUserRepos
        }}>
            {props.children}
        </GithubContext.Provider>
    )
}




