import { useState } from "react"
import { updateStudent } from "../services/apiStudents"
import '../styles/styles_update.css'
export const UpdateStudent = ({ iden, names, age, average, scholaship, onCancel, onUpdateData }) => {

    const [newStudent, setNewStudent] = useState({
        name: names,
        age: age,
        average: average,
        scholaship: scholaship
    })
    const handleName = (e) => {
        const newName = e.target.value
        setNewStudent({
            ...newStudent,
            name: newName
        })
    }
    const handleAge = (e) => {
        const newAge = e.target.value
        setNewStudent({
            ...newStudent,
            age: newAge
        })
    }
    const handleAverage = (e) => {
        const newAverage = e.target.value
        setNewStudent({
            ...newStudent,
            average: newAverage
        })
    }
    const setStudent = async () => {
        const { age, average } = newStudent
        let scholarship = 0
        if (age >= 18) {
            if (average >= 9) {
                scholarship = 2000
            } else if (average >= 7.5) {
                scholarship = 1000
            } else if (average >= 6) {
                scholarship = 500
            }
        } else {
            if (average >= 9) {
                scholarship = 3000
            } else if (average >= 8) {
                scholarship = 2000
            } else if (average >= 6) {
                scholarship = 100
            }
        }

        const updatedForm = {
            ...newStudent,
            scholarship: scholarship
        };
        await updateStudent(iden, updatedForm)
        onCancel(false)
        onUpdateData(true)
    }
    const closeView = () => {
        onCancel(false)
    }
    return (
        <div className="modal-overlay">
            <div className="container-update">
                <div>
                    <button className="close" onClick={closeView}>X</button>
                </div>
                <form>
                    <div className="container-input">
                        <input type="text" id="name" name="name" onChange={handleName} required />
                        <label htmlFor="name">NAME</label>
                    </div>
                    <div className="container-input">
                        <input type="number" min={0} max={110} id="age" name="age" onChange={handleAge} required />
                        <label htmlFor="age">AGE</label>
                    </div>
                    <div className="container-input">
                        <input type="number" min={0.0} max={10} step={0.1} id="average" name="average" onChange={handleAverage} required />
                        <label htmlFor="average">AVERAGE</label>
                    </div>
                    <div>
                        <button name="update" id="update" type="button" onClick={setStudent} className="button-register">UPDATE</button>
                    </div>
                </form>
            </div>
        </div>
    )
}