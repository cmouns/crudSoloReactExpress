import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router";
import Student from './components/Student';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Student />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
   
  )
}

export default App
