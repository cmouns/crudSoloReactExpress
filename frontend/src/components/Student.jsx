import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Student() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setStudent(res.data))

      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="table-fixed">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs dark:bg-gray-500 text-gray-900 uppercase  dark:text-black">
            <tr>
              <th
                scope="col"
                className="text-lg font-bold bg-white border-b  dark:border-gray-900 border-gray-900 px-6 py-3"
              >
                Prenom
              </th>
              <th
                scope="col"
                className="text-lg font-bold bg-white border-b  dark:border-gray-900 border-gray-900 px-10 py-4"
              >
                Rôle
              </th>
              <th
                scope="col"
                className="text-lg font-bold bg-white border-b  dark:border-gray-900 border-gray-900"
              >
                <Link
                  to="/add"
                  className="bg-green-600 hover:bg-green-900 text-white font-bold px-4 rounded py-3 mx-2"
                >
                  Ajouter
                </Link>
              </th>
            </tr>
          </thead>
          <tbody className="font-bold">
            {student.map((data, i) => (
              <tr
                className="  bg-white border-b dark:bg-gray-500 dark:border-gray-900 border-gray-900"
                key={i}
              >
                <td className="text-lg  text-white px-6 py-4">{data.name}</td>
                {data.role === "Front-End" ? (
                  <td className="px-6 py-4 text-yellow-500 ">{data.role}</td>
                ) : data.role === "Git-Hub" ? (
                  <td className="px-6 py-4 text-red-700">{data.role}</td>
                ) : (
                  <td className="px-6 py-4 text-blue-900">{data.role}</td>
                )}

                <td className="flex items-center space-x-2 px-6 py-4">
                  {/* Bouton crayon cliquable */}
                  <Link
                    to={`update/${data.id}`}
                    className="flex items-center justify-center bg-blue-600 hover:bg-blue-900 text-white font-bold px-3 rounded py-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.146.146a.5.5 0 0 1 .708 0l3 
               3a.5.5 0 0 1 0 .708l-10 
               10a.5.5 0 0 1-.168.11l-5 
               2a.5.5 0 0 1-.65-.65l2-5a.5.5 
               0 0 1 .11-.168zM11.207 
               2.5 13.5 4.793 14.793 
               3.5 12.5 1.207zm1.586 
               3L10.5 3.207 4 
               9.707V10h.5a.5.5 0 0 
               1 .5.5v.5h.5a.5.5 0 0 
               1 .5.5v.5h.293zm-9.761 
               5.175-.106.106-1.528 
               3.821 3.821-1.528.106-.106A.5.5 
               0 0 1 5 12.5V12h-.5a.5.5 
               0 0 1-.5-.5V11h-.5a.5.5 
               0 0 1-.468-.325"
                      />
                    </svg>
                  </Link>

                  {/* Bouton supprimer */}
                  <button className="bg-red-600 hover:bg-red-900 text-white font-bold px-4 rounded py-2">
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Student;
