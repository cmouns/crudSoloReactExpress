import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddStudent() {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/add', { name, role })
            .then(res => {
                console.log("Student added", res);
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Login</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {/* Formulaire */}
                            <form onSubmit={handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input 
                                        autoComplete="off" 
                                        id="name" 
                                        name="name" 
                                        type="text" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" 
                                        placeholder="Prénom" 
                                    />
                                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                        Prénom
                                    </label>
                                </div>

                                <div className="relative">
                                    <label htmlFor="roles" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choisir un rôle </label>
                                    <select 
                                        id="roles" 
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">Choisissez un rôle</option>
                                        <option value="FE">Front-End</option>
                                        <option value="BE">Back-End</option>
                                        <option value="GH">Git-Hub</option>
                                    </select>
                                </div>

                                <div className="relative">
                                    <button type="submit" className="bg-cyan-500 text-white rounded-md px-2 py-1">
                                        Ajouter
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent;
