import { useState } from "react"
import { createStudent } from "../services/apiStudents"
import '../styles/styles_form.css'
export const FormStudent = () => {
    const [form, setForm] = useState({
        name: "",
        age: 0,
        average: 0,
        scholarship: 0
    })
    const handleName = (e) => {
        const newName = e.target.value
        setForm({
            ...form,
            name: newName
        })
    }
    const handleAge = (e) => {
        const newAge = e.target.value
        setForm({
            ...form,
            age: newAge
        })
    }
    const handleAverage = (e) => {
        const newAverage = e.target.value
        setForm({
            ...form,
            average: newAverage
        })
    }
    const registerForm = async () => {
        const { age, average } = form
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
            ...form,
            scholarship: scholarship
        };
        await createStudent(updatedForm)
    }
    return (
        <div className="container-form">

            <form className="form-register">
                <div>
                    <h1>REGISTER STUDENT</h1>
                </div>
                <div className="container-input">
                    <label htmlFor="name">NAME</label>
                    <input type="text" id="name" name="name" placeholder="Enter your number" onChange={handleName} />
                </div>
                <div className="container-input">
                    <label htmlFor="age">AGE</label>
                    <input type="number" min={0} max={110} id="age" name="age" onChange={handleAge} />
                </div>
                <div className="container-input">
                    <label htmlFor="average">AVERAGE</label>
                    <input type="number" min={0.0} max={10} step={0.1} id="average" name="average" onChange={handleAverage} />

                </div>
                <div className="container-input">
                    <label htmlFor="address">ADDRESS</label>
                    <input type="text" id="address" name="address" placeholder="Enter your main street" />
                </div>
                <div className="container-input">
                    <label htmlFor="dni">DNI</label>
                    <input type="text" max={10} min={10} id="dni" name="id" placeholder="Enter you identifier" />
                </div>
                <div className="container-button">
                    <button type="button" onClick={registerForm}>Register</button>
                </div>
            </form>
        </div>
    )
}