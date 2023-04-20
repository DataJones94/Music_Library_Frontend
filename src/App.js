import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() { 
  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
    getAllSongs();
    console.log('Hello World!');
   

  },[]);
  
  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log (response.data);
    setSongs(response.data)

  }

  return (
    <div>
      <button onClick={() => getAllSongs()}>Get All Songs</button>
      
    
    </div>
  );
}

export default App;
{/*can use the state variable setSongs to help map through and display each song in a table  */}