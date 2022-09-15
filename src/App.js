import './global.js';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Login from './components/Login';
import Artists from './components/Artists';
import Albums from './components/Albums.js';
import Tracks from './components/Tracks.js';
import { useState} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {
    const [artistId, setArtistId] = useState([]);
    const [artistName, setArtistName] = useState([]);
    const [albumId, setAlbumId] = useState([]);
    const navigate = useNavigate();

    const navigateToAlbums = (idArtist, nameArtist) => {
        setArtistId(idArtist);
        setArtistName(nameArtist);
        navigate('/albums');
    };

    const navigateToAlbum = () => {
        navigate('/');
    };

    const navigateToTracks = (idAlbum) => {
        setAlbumId(idAlbum);
        navigate('/tracks');
    };

  const [token, setToken] = useState("")

  const getTokenFromLogin = (tokenLogin) => {
    setToken(tokenLogin);
    navigateToAlbum();
  }

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return (
        <div className="App">
          <Header />
            <div className="Body">
                {!token ?
                    <Login onLogin={getTokenFromLogin} />
                    : <button onClick={logout}>Logout</button>
                }
                { token ?
                    <Routes>
                        <Route path="/" element={<Artists token={token} navigateToAlbums={navigateToAlbums} />} />
                        <Route path="/albums" element={<Albums token={token} artistId={artistId} artistName={artistName} navigateToTracks={navigateToTracks} />} />
                        <Route path="/tracks" element={<Tracks token={token} albumId={albumId} />} />
                    </Routes>
                :null}
                

            </div>
            <Footer />
        </div>
    );
}

export default App;
