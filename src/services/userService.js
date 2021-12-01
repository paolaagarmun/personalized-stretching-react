import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL;

export const getAllUsers = async () => {
    const response = await axios.get(`${apiUrl}/users`);
    return response
}

export const getSingleUserFromApi = async (id) => {
    const response = await axios.get(`${apiUrl}/users/user/${id}`);
    return response;
}

export const updateSingleUserFromApi = async (id, routineId) => {
    const response = await axios.put(`${apiUrl}/users/user/${id}`, routineId);
    return response;
}
