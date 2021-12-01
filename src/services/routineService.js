import axios from 'axios'
import {updateSingleUserFromApi} from './userService'

const apiUrl = process.env.REACT_APP_API_URL;

//POST routine
export const createRoutineInApi = async (routine) => {
    alert("created routine")
    const response = await axios.post(`${apiUrl}/routines/routine`, routine)
    //console.log(response.data.user)
    const routineObj = {routine:response.data._id}
    await updateSingleUserFromApi(response.data.user,routineObj );
    return response;
}
//GET single routine 
export const getSingleRoutineFromApi = async (id) => {
    const response = await axios.get(`${apiUrl}/routines/routine/${id}`);
    return response;
}

//UPDATE routine/:id
export const updateRoutineInApi = async (obj) => {
    const response = await axios.put(`${apiUrl}/routines/routine/${obj._id}`, obj);
    return response;
}
