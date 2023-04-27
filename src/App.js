import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import AddAsong from './Components/AddAsong/AddAsong';
import SearchBar from './Components/SearchBar/SearchBar';
import './Apps.css';
import './Components/AddAsong/AddAsong.css';


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

 function searchMusic(userInput){
   let results = songs.filter((entry) => userInput === entry.title);

  console.log(results) 
}


return (
  <div className='container-fluid'>
    <div className='row'> <h3 style={{margin: '1 rem'}}>Music Library</h3></div>
    <div className='border-box'>
      <table>
        <tbody>
           <MusicTable parentEntries= {songs}/>
        </tbody>   
      </table>
    </div>

      <button onClick={() => getAllSongs()}>Get All Songs</button>
        <div className='container-fluid'>
          <div className='row'> <h3 style={{margin:'1 rem'}}></h3></div>
          <div className='border-box'>
            <table>
              <tbody>
          <AddAsong addNewEntry={addNewEntry}/>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <SearchBar searchMusic={searchMusic}/>
        </div>
        
        

      
      {/* <button onClick={() => addNewEntry()}>Add A Song</button> */}
      
    
    </div>
  );
}

export default App;



      //  let SearchMusic = songs.filter (el => {
      //   if (songs.SearchMusic.includes(el.title)){
      //     return true;
      //   }
      //  });