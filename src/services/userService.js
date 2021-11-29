import axios from 'axios'

export const getAllUsers = async () => {
    const response = await axios.get('http://localhost:5000/api/v1/users');
    return response
}

export const getSingleUserFromApi = async (id) => {
    const response = await axios.get(`http://localhost:5000/api/v1/users/user/${id}`);
    return response;
}

export const updateSingleUserFromApi = async (id, routineId) => {
    const response = await axios.put(`http://localhost:5000/api/v1/users/user/${id}`, routineId);
    return response;
}
