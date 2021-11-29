import axios from 'axios';

//const apiUrl = process.env.REACT_APP_API_URL;

//POST/exercise
export const createExercise = async (exercise) => {
    const response = await axios.post(`http://localhost:5000/api/v1/exercises/exercise`, exercise);
    alert("Created exercise successfully");
    return response;
}

//GET/exercises
export const getAllExercises = async () => {
    const response = await axios.get(`http://localhost:5000/api/v1/exercises`);
    return response;
}

//GET single exercises
export const getSingleExerciseFromApi = async (id) => {
    const response = await axios.get(`http://localhost:5000/api/v1/exercises/exercise/${id}`);
    return response;
}