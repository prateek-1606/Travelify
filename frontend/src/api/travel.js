import axios from 'axios';
const URL = 'http://localhost:3001/blogs'

export const getAllTravel = async () => {
    try {
        const res = await axios.get(`${URL}`)
        console.log(res);
        return res;
    }
    catch (error) {
        throw error;
    }
}

export const postTravel = async ({ title, source, destination, content, ExpensePerHead, AvailableSeats }) => {
    const token = JSON.parse(localStorage.getItem('user')).token;
    console.log(token)
    const Likes = [], comment = [];
    try {
        const res = await axios.post(`${URL}`,
            { title, source, destination, content, ExpensePerHead, AvailableSeats, Likes, comment }
            , { headers: { "Authorization": `Bearer ${token}` } })
        console.log(res);
        return res;
    }
    catch (error) {
        throw error;
    }
}

export const getTravel = async (id) => {
    try {
        const res = await axios.get(`${URL}/${id}`)
        console.log(res);
        return res;
    }
    catch (error) {
        throw error;
    }
}

export const deleteTravel = async (id) => {
    try {
        const token = JSON.parse(localStorage.getItem('user')).token;
        const res = await axios.delete(`${URL}/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
        console.log(res);
        return res;
    }
    catch (e) {
        throw e;
    }
}
