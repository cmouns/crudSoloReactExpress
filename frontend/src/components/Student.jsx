import React, { useState, useEffect}  from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';



function Student() {
    const [student, setStudent] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setStudent(res.data))
        
        .catch(err => console.log(err)
        )
    }, [])
    
  return (
    <div className="relative overflow-x-auto">
        <Link to="/add" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ajouter</Link>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">Prenom</th>
                    <th scope="col" class="px-6 py-3">Rôle</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    student.map((data, i)=> (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" key={i}>
                            <td className= "px-6 py-4">{data.name}</td>
                            <td className= "px-6 py-4">{data.role}</td>
                        </tr>
                    ))
                }
                

            </tbody>
            </table>
    </div>
  )
}

export default Student
