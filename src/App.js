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

    const navigate = useNavigate();

    const navigateToTracks = () => {
        navigate('/track');
    };

    const navigateToAlbum = () => {
        navigate('/');
    };

  const [token, setToken] = useState("")

  const getTokenFromLogin = (tokenLogin) => {
    console.log("Connect "+tokenLogin);
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
                    : <button onClick={logout}>Logout</button>}

                {/* {token ?
                    <Album token={token} />
                    : null
                } */}
                { token ?
                    <Routes>
                        <Route path="/" element={<Album token={token} navigateToTracks={navigateToTracks} />} />
                        <Route path="/track" element={<Tracks token={token} />} />
                    </Routes>
                :null}
                

            </div>
            <Footer />
        </div>
    );
  // return (
  //   <div className="App">
  //     <Header />
  //     <MusicBody />
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
