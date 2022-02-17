import {useState,useReducer} from 'react'
import { data } from '../data';
import Modal from './Modal';

const reducer = (state,action) => {
   if (action.type=== 'ADD_ITEM'){
       const newPeople = [...state.people,action.payload]
    return {
        ...state,
        people : newPeople,
        isModalOpen : true,
        modalContent:'item added',
 

}
}
return state;
}
const defaultState = {
    people:[],
    isModalOpen:false,
    modalContent:''
}

const ModalExemple = () => {
    const [name,setName] = useState('')
    const [state,dispatch] = useReducer(reducer,defaultState)
    //const [people,setPeople] = useState(data)
    //const [showModal,setShowModal] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (name){
            const newItem = {id:new Date().getTime().toString(),name}
            dispatch({type:'ADD_ITEM',payload:newItem})
           // setShowModal(true);
            //setPeople([...people,{id: new Date().getTime().toString(),name}])
           // setName('')
        }else{
          dispatch({type:'RANDOM'}) 
        }
    };
return <>
{state.isModalOpen && <Modal modalContent={state.modalContent}/>}
<form onSubmit={handleSubmit}>
    <div>
<input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    </div>

    <button type='submit'>add</button>



</form>
{state.people.map((person) => {
    return <div key={person.id}>
        <h4>{person.name}</h4>
        </div>
} )}
</>
}


export default ModalExemple