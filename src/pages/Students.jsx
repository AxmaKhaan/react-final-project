import React from 'react'
import "/src/Students.css";
import {useState} from "react"

export default function Students() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [course, setCourse] = useState("");
   const handleSubmit = (e) => {
    alert("enrolled student :" + name);
    e.preventDefault();
    setName("");
    setEmail("");
    setCourse("");
   }

  return (
    <>
    <section className='form_section'>
      <div className='form_container'>
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="" id='name'>Enter your Name</label>
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <label htmlFor="">Enter your Email</label>
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <label htmlFor="">Select Course:</label>
          <select name="" id="" value={course} onChange={(e)=>{setCourse(e.target.value)}}>
            <option value="web dev">web dev</option>
            <option value="DMM">DMM</option>
            <option value="Graphic designing">Graphic designing</option>
            <option value="AI web designing">AI web designing</option>
          </select>
          <button type='submit'>submit</button>
        </form>
        <h1>{course}</h1>
      </div>
    </section>
    </>
  )
}
