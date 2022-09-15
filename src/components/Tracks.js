import '../App.css';
import axios from 'axios';
import {useEffect, useState} from "react";

function Tracks(props) {
    useEffect(() => {
        getAlbumTracks();
    }, [])

    const getAlbumTracks = async () => {
        // let albumId = props.albumId
        // Was working tomorrow, not anymore :(
        //     const {data} = await axios.get("https://api.spotify.com/v1/albums/2Y5WftWX9ZA7a01NYaBX4L/tracks", {
        //     headers: {
        //         Authorization: `Bearer ${props.token}`
        //     }
        // })

        // get a random track 
        // https://api.spotify.com/v1/tracks/{id}
        
    }

    return (
    <div className="Album">
        <h1 className="title-section">Listen to the tracks</h1>

        <div className="albums-message">
            {props.albumId}
        </div>
    </div>
    );
}

export default Tracks;
