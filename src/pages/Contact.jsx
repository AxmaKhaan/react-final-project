import React, { useEffect, useState } from 'react'

export default function Contact() {
  const [ID, setId] = useState([]);
  const [searchId, setSearchId] = useState(null)
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchId(Number(ID))
  }
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUser(data))
  },[]);
  return (
    <>
    <div className="container" style={{margin: "300px",color: "black"}}>
     <form bindsubmit="" onSubmit={handleSearch}>
        <label htmlFor="">student info by id</label>
        <input type="number" placeholder='Enter ID' value={ID} onChange={(e)=> {setId(e.target.value)}}/>
        <button type='submit'>submit</button>
     </form>
    </div>
    <div style={{margin: "300px",color: "black"}}>
      <h1>user list</h1>
      <ul>
        {users.filter(user => user.id === searchId)
         .map(user =>(
            <li key={user.id}>{user.name}</li>
         ))
        }
      </ul>
    </div>
    </>
  )
}


