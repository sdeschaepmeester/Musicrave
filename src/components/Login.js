import logo from '../assets/musicravelogo.png';
import image from "../assets/bgmusic.png"; 
import {useEffect, useState, useRef } from "react";
import axios from 'axios';
import '../App.css';

function Login(props) {
    const CLIENT_ID = "b39c9c2f4fa346a69e4cdbcafefd5185";
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    const [searchKey, setSearchKey] = useState("");
    const [artists, setArtists] = useState([]);
    const giveTokenToParent = (tokenLogin) => {
        props.onClick(tokenLogin)
    }
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        giveTokenToParent(token);
    }, [])

    return (
    <div>
        <h1>Login custom page</h1>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
    </div>
    );
}

export default Login;
