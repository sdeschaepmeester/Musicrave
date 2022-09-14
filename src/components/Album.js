import { useState} from "react";
import axios from 'axios';
import searchicon from '../assets/magnifying-glass.png';
import '../App.css';

function Album(props) {
    const [artists, setArtists] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${props.token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
        console.log(data)
        setArtists(data.artists.items)
    }

    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id} className="artist-row">
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt="" className="artist-img"/> : <div>No Image</div>}
                <span className="artist-name">{artist.name}</span>
                <button className="album-search-button" onClick={() => props.navigateToTracks(artist.id)}>
                    <img src={searchicon} className="album-search-icon" />
                </button>
            </div>
        ))
    }

    return (
    <div className="Album">
        <h1 className="title-section">Search an artist</h1>
        <p style={{color: "white"}}>
            Enter the name of the artist whose songs are stuck in your head.
        </p>
        <form onSubmit={searchArtists} className="album-form" >
            <input className="album-search" type="text" onChange={e => setSearchKey(e.target.value)}/>
            <button className="album-search-button" type={"submit"}>
                <img src={searchicon} className="album-search-icon" />
            </button>
        </form>
        <div className="artist-container">
            {renderArtists()}
        </div>
    </div>
    );
}

export default Album;
