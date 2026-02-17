import React, { useEffect, useState } from 'react'
import "/src/CourseDetails.css"

export default function CourseDetails() {
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
    <div className='Detail_container' >
    <div>
     <form bindsubmit="" onSubmit={handleSearch}>
        <label htmlFor="">student info by id</label>
        <input type="number" placeholder='Enter ID' value={ID} onChange={(e)=> {setId(e.target.value)}}/>
        <button type='submit'>submit</button>
     </form>
    </div>
    <div>
      <h1>user list</h1>
      <ul>
        {users.filter(user => user.id === searchId)
         .map(user =>(
            <li key={user.id} style={{background: "white", padding: "20px", listStyle: "none", borderRadius: "20px"}}>Student Name: {user.name}
                <br/>
                Student Email: {user.email}
                <br/>
                Phone : {user.phone}
                <br/>
                Website : {user.website}
            </li>
         ))
        }
      </ul>
    </div>
    </div>
    </>
  )
}