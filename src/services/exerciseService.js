import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

//POST/exercise
export const createExercise = async (exercise) => {
    const {image, ...newExercise} = exercise
    const response = await axios.post(`${apiUrl}/exercises/exercise`, newExercise);
    await imageUploadToApi(response.data._id, image)
    //alert("Created exercise successfully");
    return response;
}

//POST/image
export const imageUploadToApi = async ( id, img) => {
    const formData = new FormData();
    formData.append('image', img);
    const response = axios.post(`${apiUrl}/exercises/exercise/imageUpload/${id}`, formData);
    return response;
}

//GET/exercises
export const getAllExercises = async () => {
    const response = await axios.get(`${apiUrl}/exercises`);
    return response;
}

//GET single exercises
export const getSingleExerciseFromApi = async (id) => {
    const response = await axios.get(`${apiUrl}/exercises/exercise/${id}`);
    return response;
}

//DELETE single exercise 
export const deleteSingleExercise = async (id) => {
    const response = await axios.delete(`${apiUrl}/exercises/exercise/${id}`);
    return response;
}