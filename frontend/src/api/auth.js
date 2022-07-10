import axios from 'axios';
const URL = 'https://travelifybackend.herokuapp.com/users'

export const login = async ({ email, password }) => {
    try {
        const res = await axios.post(`${URL}/login`, {
            email,
            password
        })
        console.log(res);
        return res;
    }
    catch (error) {
        throw error;
    }
}

export const register = async ({ email, password, name, contact }) => {
    try {
        const res = await axios.post(`${URL}`, {
            email,
            name,
            password,
            contact
        })

        return res;
    }
    catch (error) {
        throw error;
    }
}

export const getuser = async (id) => {
    try {
        const res = await axios.get(`${URL}/${id}`)
        console.log(res);
        return res;
    }
    catch (error) {
        throw error;
    }
}