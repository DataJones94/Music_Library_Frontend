import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import AddAsong from './Components/AddAsong/AddAsong';
import SearchBar from './Components/SearchBar/SearchBar';


function App() { 
  const [songs, setSongs] = useState([])

  
  useEffect(() => {
    getAllSongs();
    
    // {/*deleted console.log("Hello World!") */}
    
   
  },[]);


  
  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log (response.data);
    setSongs(response.data)
  }

  async function addNewEntry(newSong){
      let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
      if (response.status === 201){
        console.log (response.data);
        await getAllSongs()
        
      }
      
  };

 function SearchMusic(songs){

   let SearchBar = songs.filter(song => songs.includes())
 }
  

  


  return (
    <div>
      <button onClick={() => getAllSongs()}>Get All Songs</button>
      <table>
        <tbody>
           <MusicTable parentEntries= {songs}/>
        </tbody>   
        <div>
          <AddAsong addNewEntry={addNewEntry}/>
        </div>
        
        
      </table>

      
      {/* <button onClick={() => addNewEntry()}>Add A Song</button> */}
      
    
    </div>
  );
}

export default App;


