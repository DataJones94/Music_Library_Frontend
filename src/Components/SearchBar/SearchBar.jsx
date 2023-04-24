// userInput goes into the search bar
import React, { useState } from 'react';

const SearcBar = (props) => {
    const [title, setTitle] = useState (props.title.setTitle);



    return (
        <input type= 'string' className='form-control' value = {title} onChange={(event) => setTitle(event.target.value)}/>

      );
}
 
export default SearcBar;