import '../App.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import babyshark from '../assets/babyshark.jpg';
import bohemian from '../assets/bohemian.jpg';
import disney from '../assets/disney.jpg';

function Albums(props) {
    const threeAlbums = [
        {name: 'Disney villains', id: '6gM3qlKwd6zo3xaYgMkuVi', description: 'For when you want to do bad deeds.', cover: disney},
        {name: 'Bohemian Rapsody', id: '6i6folBtxKV28WX3msQ4FE', description: 'A classic.', cover: bohemian},
        {name: 'Baby shark', id: '32rfxYeHQua1OqWpmBEK90', description: 'Can you believe Baby Shark has 11 billions views on Youtube ?', cover: babyshark},
    ];

    useEffect(() => {
        getArtistTracks();
    }, [])

    const getArtistTracks = async () => {
       console.log("faire la requete get artists albums")
    }

    return (
    <div className="Album">
        <h1 className="title-section">Explore the artist's albums !</h1>

        <div className="albums-message">
            <p style={{color: 'white'}}>
                You want to listen to {props.artistName} ? Good choice.
                <br/>
                Unfortunately, I can't get the API request (get artist's albums) to work.
                <br/>
                Therefore, I chose three albums for you. Hope you like it (Because that's all I got):
            </p>
            {threeAlbums.map(({ name, id, description, cover }) => (
                <div key={id} className="artist-row">
                    <div style={{flexDirection: 'row', marginBottom: '2%'}}>
                        <img width={"100%"} src={cover} alt="" className="artist-img"/>
                        <span style={{color: 'white', fontSize: 22, marginLeft: '7%'}}>{name}</span>
                        <button style={{backgroundColor: 'grey', float: 'right', marginTop: '10%', width: '30%'}} onClick={() => props.navigateToTracks(id)}>
                            <p>Listen to this album</p>
                        </button>
                    </div>
                    <span style={{color: 'white', marginLeft: '10%'}}>{description}</span>
                </div>
             ))}

        </div>
    </div>
    );
}

export default Albums;
