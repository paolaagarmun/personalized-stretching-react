import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

//POST/exercise
export const createExercise = async (exercise) => {
    const response = await axios.post(`${apiUrl}/exercises/exercise`, exercise);
    alert("Created exercise successfully");
    return response;
}