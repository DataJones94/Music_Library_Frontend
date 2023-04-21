import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';


function App() { 
  const [songs, setSongs] = useState([{title: "Just The Way You Are", album: "DooWaps and Hooligans", artist: "Bruno Mars", genre: "Pop", release_date: "12-04-2010"}])

  
  useEffect(() => {
    getAllSongs();
    addAsong();
    {/*deleted console.log("Hello World!") */}
    
   

  },[]);

  
  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log (response.data);
    setSongs(response.data)
  }

    async function addAsong(){
      const response = await axios.post('http://127.0.0.1:8000/api/music/');
      console.log (response.data);
      setSongs(response.data)

    }
  


  return (
    <div>
      <button onClick={() => getAllSongs()}>Get All Songs</button>
      <MusicTable parentEntries= {songs}/>
      <button onClick={() => addAsong()}>Add A Song</button>
      
    
    </div>
  );
}

export default App;


