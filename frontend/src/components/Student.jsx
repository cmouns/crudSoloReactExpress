import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';



function Student() {
    const [student, setStudent] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setStudent(res.data))
        .catch(err => console.log(err)
        )
    })

  return (
    <div>
        <h1>test</h1>
    </div>
  )
}

export default Student
