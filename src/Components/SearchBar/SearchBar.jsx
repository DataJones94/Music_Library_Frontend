// userInput goes into the search bar
import React, { useState } from 'react';

const SearchBar = (props) => {
    const [userInput, setUserInput] = useState('');



    return (

        <div>
        <input type= 'string' className='form-control' value = {userInput} onChange={(event) => setUserInput(event.target.value)}/>
        </div>
        
        
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