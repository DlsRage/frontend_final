import axios from 'axios'

const serviceAxios = axios.create({
    baseURL: 'http://localhost:4000/api/students'
})

export default serviceAxios