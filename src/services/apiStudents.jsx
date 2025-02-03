import serviceAxios from '../lib/connection'

export const getAll = async () => {
    try {
        const { data } = await serviceAxios.get()
        return data
    } catch (e) {
        console.log(e)
    }
}
export const getOneById = async (id) => {
    try {
        const url = `/${id}`
        const { data } = await serviceAxios.get(url)
        return data
    } catch (e) {
        console.log(e)
    }
}
export const createStudent = async (data) => {
    try {
        await serviceAxios.post('/', data)
    } catch (e) {
        console.log(e)
    }
}
export const updateStudent = async (id, student) => {
    try {
        const url = `/${id}`
        const { data } = await serviceAxios.put(url, student)
        return data
    } catch (e) {
        console.log(e)
    }
}
export const deleteStudent = async (id) => {
    try {
        const url = `/${id}`
        await serviceAxios.delete(url)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}
