import React from 'react'
import { useState } from 'react';

const Abject = () => {
const [person,setPerson] = useState({
    name: 'peter',
    age:24,
    message: 'rondom message',
});
const [name,setName]=useState('peter');
const [age,setAge]=useState(24);
const [message,setMessage]=useState('rondom message')


const changeMessage = () => {
  if (message==='rondom message'){
    setMessage('hello world')
  } else{
    setMessage('rondom message')
  }
  //setPerson ({ ...person,  message: 'hello workd'});
  
};

  return (
    <>
  <h3>{name}</h3>
  <h3>{age}</h3>
  <h4>{message}</h4>
  <button className='btn' onClick={changeMessage} >change the message</button>
  </>

  ) 
    
  
}

export default Abject
