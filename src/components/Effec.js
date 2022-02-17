import React from 'react'
import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users';

const Effec = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
      setUsers(users);
};

useEffect(()=>{
    getUsers();
},[]);
  return (
    <>
      <h3>Git hub users</h3>
      <ul>
          {users.map((user)=>{
              const {id,login,avatar_url}=user
              return <li key={id}>
<img src={avatar_url} alt={login}></img>
<div>
    <h4>login</h4>
</div>

              </li>
               

          })}

      </ul>
     
    </>
  )
}

export default Effec
