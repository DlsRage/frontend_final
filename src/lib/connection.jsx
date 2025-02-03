import axios from 'axios'

const serviceAxios = axios.create({
    baseURL: 'https://backend-final-eosin.vercel.app/api/students'
})

export default serviceAxios