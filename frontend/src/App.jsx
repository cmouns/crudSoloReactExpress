import './App.css'
import {BrowserRouter, Routes, Route} from "react-router";
import Student from './components/Student';
import AddStudent from './components/AddStudent'
import UpdateStudent from './components/UpdateStudent';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Student />}></Route>
          <Route path="/add" element= {<AddStudent />}></Route>
          <Route path="/update/:id" element= {<UpdateStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
   
  )
}

export default App
