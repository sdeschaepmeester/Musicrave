import './global.js';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Login from './components/Login';
import Album from './components/Album';
import Tracks from './components/Tracks.js';
import { useState} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {
    const [artistId, setArtistId] = useState([])
    const navigate = useNavigate();

    const navigateToTracks = (idArtist) => {
        setArtistId(idArtist);
        navigate('/track');
    };

    const navigateToAlbum = () => {
        navigate('/');
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
                        <Route path="/" element={<Album token={token} navigateToTracks={navigateToTracks} />} />
                        <Route path="/track" element={<Tracks token={token} artistId={artistId} />} />
                    </Routes>
                :null}
                

            </div>
            <Footer />
        </div>
    );
}

export default App;
