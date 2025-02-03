import { deleteStudent, getAll } from "../services/apiStudents";
import { useState, useEffect } from "react";
import { UpdateStudent } from "./updateStudent";
import '../styles/styles_table.css'
export const TableStudents = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([])
    const [update, setUpdate] = useState(false);
    const [student, setStudent] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAll()
            setData(result)
            setFilter(result)
        }
        fetchData()
    }, [])

    const handleSearch = (e) => {
        const id = e.target.value
        if (id != "") {
            setFilter(data.filter(student => student.id == id))
        } else {
            setFilter(data)
        }

    }
    const handleByStudent = (student) => {
        setUpdate(true)
        setStudent(student)
    }
    const updateData = async (condition) => {
        if (condition) {
            const newData = await getAll();
            setData(newData)
            setFilter(newData)
        }
    }
    const deleteStudentById = async (id) => {

        const result = await deleteStudent(id)
        if (result) {
            updateData(true)
        } else {
            console.log("Couldn't eliminate")
        }
    }
    return (
        <div id="main_table">
            <div>
                <h1>LIST OF STUDENTS</h1>
            </div>
            <div>
                <form>
                    <label htmlFor="search">SEARCH: </label>
                    <input type="text" name="search" id="search" placeholder="Search By ID" onChange={handleSearch} />
                </form>
            </div>
            <table className="content-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>AVERAGE</th>
                        <th>SCHOLARSHIP</th>
                        <th>FUNCTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {filter.map((student) => (<tr key={student._id}>
                        <td>{student._id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.average}</td>
                        <td>{student.scholarship == 0 ? 'Estudien más para el próximo ciclo escolar' :
                            student.scholarship}
                        </td>
                        <td><button type="button" onClick={() => handleByStudent(student)} className="functions"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                        </svg> EDIT</button>
                            <button type="button" onClick={() => deleteStudentById(student._id)} className="functions"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                            </svg> DELETE</button></td>
                    </tr>))}
                </tbody>
            </table>
            {update ? (<UpdateStudent names={student.name} iden={student._id} age={student.age} average={student.average} scholaship={student.scholarship} onCancel={setUpdate} onUpdateData={updateData} />) : (<></>)}
        </div >
    )
}