import React from 'react'
//import { useState } from 'react/cjs/react.development'

const  Counter = () => {

    const [value,setValue]= React.useState(0);


    const complexeIncrese = () =>{
    setTimeout(() => {
        setValue((prevState) => {
            return prevState + 1;
        });
    },2000);
};
    
    
    
    
    


  return ( 
  <>
      <section >
    <h2>regular counter</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>setValue
    (value-1)}>decrease</button>
    <button className='btn' onClick={complexeIncrese}>increase</button>
     <button className='btn' onClick={()=>setValue
    (0)}>reset</button>

      </section>
      </>
   
  )
     }

export default Counter
