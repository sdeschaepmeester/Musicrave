import React, { useEffect, useState } from 'react';
import { getMusicByGenre } from '../services/getMusicByGenre';

function MusicBody() {
  const [list, setList] = useState([]);
  const [token, setToken] = useState("")
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)

}, [])


  useEffect(() => {
    let mounted = true;
    getMusicByGenre()
      .then(items => {
        console.log(items)
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return(
    <div>
     <h1>My Grocery List</h1>
     <ul>
       {list.map(item => <li key={item.item}>{item.item}</li>)}
     </ul>
   </div>
  )
}

export default MusicBody;
