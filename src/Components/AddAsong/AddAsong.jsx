import React, { useState } from 'react';
import './AddAsong.css';



const AddAsong = (props) => {
    const [title, setTitle] = useState ('');
    const [album, setAlbum] = useState ('');
    const [artist, setArtist] = useState ('');
    const [genre, setGenre] = useState ('');
    const [release_date, setReleaseDate] = useState ('');


    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            title: title,
            album: album,
            artist: artist,
            genre: genre,
            release_date: release_date,
        };
        console.log(newEntry);
        props.addNewEntry(newEntry)
    }


    return (
        <form onSubmit={handleSubmit}className='form-grid'>
            <div className='form-group'>
                <label>title</label>
                <input type= 'string' className='form-control' value = {title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>album</label>
                <input type= 'string' className='form-control' value = {album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>artist</label>
                <input type= 'string' className='form-control' value = {artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>genre</label>
                <input type= 'string' className='form-control' value = {genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>release_date</label>
                <input type= 'date' className='form-control' value = {release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
            </div>

            <button type= 'submit'className='btn btn-primary' style={{'margin-top': '1em'}}>Add</button>
        </form>
      );
}
 
export default AddAsong;