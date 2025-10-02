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
    <>
        <div className="grid justify-items-start ">
            <div className="py-5">
                <Link to="/add" className="bg-orange-600 hover:bg-amber-400 text-white font-bold px-4 rounded py-5">Ajouter</Link>
            </div>

            <div className="table-fixed">
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
                                    <td>
                                        <Link to={`update/${data.id}`} className='btn btn-primary'>Modifier</Link>
                                        <button className='btn btn-danger mx-5'>Supprimer</button>
                                    </td>
                                </tr>
                            ))
                        }
                        

                    </tbody>
                    </table>
            </div>
        </div>
    </>
  )
}

export default Student
