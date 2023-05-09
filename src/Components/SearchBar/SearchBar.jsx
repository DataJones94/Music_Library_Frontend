// userInput goes into the search bar
import React, { useState } from 'react';

const SearchBar = (props) => {
    const [userInput, setUserInput] = useState([]);
    

    function handleSubmit(event) {
        event.preventDefault();
        props.userInput(userInput)
    }
    return (
        <form onSubmit={handleSubmit}className='form-grid'>
            <div className= 'form-group'>
                <label>search for </label>
                <input type= 'text' placeholder='search title,etc.' value = {userInput} onChange={(event) => setUserInput(event.target.value)}/>
            
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