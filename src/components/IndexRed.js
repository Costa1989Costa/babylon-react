import React from 'react'
import {useState} from 'react'
import {data} from '../data'
import Modal from './Modal';

//import 'bootstrap/dist/css/bootstrap.min.css';


const IndexRed = () => {
    const [name,setName]=useState('')
    const [people,setPeople]=useState(data)
    const [showModal,setShowModal]=useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
         
        if(name){
            setShowModal(true);
            setPeople([...people, {id: new Date().getTime().toString(),name}]
            );
            setName('')
 }else {
            setShowModal(true);
        }
    }


  return (
     
    <div>
       
     {showModal && <Modal />}
     <form onSubmit={handleSubmit} className='form'>
     <button type="submit">add person</button>
<div>
<input
type='text'
value={name}
onChange={(e)=>setName(e.target.value)}
/>
</div>

 </form>
 {people.map((person)=>{
     return <div key={person.id}>
         <h4>{person.name}</h4>
     </div>
 })}
    </div>
  )
}

export default IndexRed
