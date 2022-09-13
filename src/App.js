import logo from './logo.svg';
import './global.js';
import './App.css';
import Header from './components/Header.js';
import MusicBody from './components/MusicBody';
import Login from './components/Login';
import {useEffect, useState} from "react";
import axios from 'axios';

function App() {
  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])

  const getTokenFromLogin = (tokenLogin) => {
    console.log("Connect "+tokenLogin);
    setToken(tokenLogin);
  }

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })

        setArtists(data.artists.items)
    }

    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }

    return (
        <div className="App">
          <Header />
            <header className="App-header">
                <h1>Spotify React</h1>
                {!token ?
                    <Login onClick={getTokenFromLogin} />
                    : <button onClick={logout}>Logout</button>}

                {token ?
                    <form onSubmit={searchArtists}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search</button>
                    </form>

                    : <h2>Please login =</h2>
                }

                {renderArtists()}

            </header>
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
