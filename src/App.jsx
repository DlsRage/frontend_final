import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { TableStudents } from './components/tableStudents'
import { FormStudent } from './components/form'

function App() {

  return (
    <>
      <nav id='navigation'>
        <div>
          <h1>SCHOLARSHIP FOR STUDENTS</h1>
        </div>
        <ul>
          <li>
            <Link to={'/'}>Show Students</Link>
          </li>
          <li>
            <Link to={'/formCreate'}>Register New Student</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<TableStudents />} />
        <Route path='/formCreate' element={<FormStudent />} />
      </Routes>
    </>
  )
}

export default App
