// userInput goes into the search bar
import React, { useState } from 'react';

const SearchBar = (props) => {
    const [userInput, setUserInput] = useState('');
    

    function handleSubmit(event,title) {
        event.preventDefault();
        let searchEntry = {
            title: title,
            // album: album,
            // artist: artist,
            // genre: genre,
            // release_date: release_date,
        };

        console.log(searchEntry)
        props.searchMusic(searchEntry)
    }



    return (

        <form onSubmit={handleSubmit}className='form-grid'>
            <div className= 'search'>
                <label>title</label>
                <input type= 'text' className='form-control' value = {userInput} onChange={(event) => setUserInput(event.target.value)}/>
                <button type= 'submit'className='btn btn-primary' style={{'margin-top': '1em'}}>Add</button>

            </div>
        </form>
        
        
        );
    }
    
    export default SearchBar;







    // <div class="search">
    // <form action="#">
    //     <input type="text"
    //         placeholder=" Search Courses"
    //         name="search">
    //     </input>        
    //     <button>
    //         <i class="fa fa-search"
    //             style="font-size: 18px;">
    //         </i>
    //     </button>
    // </form>