import '../App.css';
import axios from 'axios';
import {useEffect, useState} from "react";

function Tracks(props) {

    useEffect(() => {
        getArtistTracks();
    }, [])

    const getArtistTracks = async () => {

       console.log("faire la requete get artists albums")
       // 6LArUyIoMiHmDvvOAsE2cd

       /////////////////////////
       ///////////////////////// Get an album track: for album with ID 2Y5WftWX9ZA7a01NYaBX4L
       ///////////////////////// It works ! do not delete.
       // get an album tracks : album id : 2Y5WftWX9ZA7a01NYaBX4L
       
    //    const {data} = await axios.get("https://api.spotify.com/v1/albums/2Y5WftWX9ZA7a01NYaBX4L/tracks", {
    //     headers: {
    //         Authorization: `Bearer ${props.token}`
    //     }
    // })
    // console.log(data)

    }
    return (
    <div className="Album">
        <h1 className="title-section">Explore the artist's albums !</h1>
    </div>
    );
}

export default Tracks;
