import '../App.css';
import axios from 'axios';

function Tracks(props) {
    // const getArtistTracks = async () => {
    //     const requestURL = "https://api.spotify.com/v1/artists/"+props.artistId+"/albums"
    //     const {data} = await axios.get(requestURL, {
    //         headers: {
    //             Authorization: `Bearer ${props.token}`
    //         }
    //     })
    //     console.log(data)
    // }
    // getArtistTracks();
    return (
    <div className="Album">
        <h1 className="title-section">Explore the artist's albums !</h1>
    </div>
    );
}

export default Tracks;
