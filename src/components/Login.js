import {useEffect } from "react";
import '../App.css';
import user from '../assets/user-icon.png';
import banner from '../assets/bannerlogin.png';

function Login(props) {
    const CLIENT_ID = "b39c9c2f4fa346a69e4cdbcafefd5185";
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const giveTokenToParent = (tokenLogin) => {
        props.onLogin(tokenLogin)
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
    <div className="Login">
        <h1 className="title-section">Log to Spotify</h1>
        <div className="login-circle" >
            <img src={user} className="login-icon" />
        </div>
        <div className="login-button">
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        </div>
        <img src={banner} className="login-banner" />
    </div>
    );
}

export default Login;
