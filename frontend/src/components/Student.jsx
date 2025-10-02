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
            
            <div className="table-fixed">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-900 uppercase bg-yellow-400 dark:bg-black dark:text-black">
                        <tr>
                            <th scope="col" className="text-lg font-bold bg-white border-b dark:bg-gray-300 dark:border-gray-900 border-gray-900 px-6 py-3">Prenom</th>
                            <th scope="col" className="text-lg font-bold bg-white border-b dark:bg-gray-300 dark:border-gray-900 border-gray-900 px-10 py-4">Rôle</th>
                            <th scope="col" className="text-lg font-bold bg-white border-b dark:bg-gray-300 dark:border-gray-900 border-gray-900"><Link to="/add" className="bg-green-600 hover:bg-green-900 text-white font-bold px-4 rounded py-3 mx-2">Ajouter</Link>
</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student.map((data, i)=> (
                                <tr className="text-lg font-bold bg-white border-b dark:bg-gray-500 dark:border-gray-900 border-gray-900" key={i}>
                                    <td className= " text-white px-6 py-4">{data.name}</td>
                                    {data.role === "Front-End" ? <td className= "px-6 py-4 text-yellow-500 text-lg font-bold">{data.role}</td> : data.role === "Git-Hub" ? <td className= "text-lg font-bold px-6 py-4 text-red-700">{data.role}</td> : <td className= "text-lg font-bold px-6 py-4 text-blue-900">{data.role}</td>}
                                    
                                    <td>
                                        <Link to={`update/${data.id}`} className='mx-3 bg-blue-600 hover:bg-blue-900 text-white font-bold px-4 rounded py-2'>Modifier</Link>
                                        <button className='bg-red-600 hover:bg-red-900 text-white font-bold px-4 rounded py-2 mr-2'>X</button>
                                    </td>
                                </tr>
                            ))
                        }
                        

                    </tbody>
                    </table>
            </div>
    </>
  )
}

export default Student
