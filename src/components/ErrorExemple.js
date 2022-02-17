import React from 'react'
import { useState } from 'react';


const ErrorExemple=()=>{
   const [text,setText] = useState('rondom title');

    const handleClick = () => {
        if(text=='rondom title'){
            setText('hello world');
        }else{
setText('rondom title');
        }
};
    return (
        <React.Fragment>
            <h1>{text}</h1>
         
            <button type='button' className='btn' onClick={handleClick}>change title</button>
            
        </React.Fragment>
    )
}

export default ErrorExemple
