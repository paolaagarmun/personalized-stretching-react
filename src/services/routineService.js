import axios from 'axios'
import {updateSingleUserFromApi} from './userService'

//POST routine
export const createRoutineInApi = async (routine) => {
    alert("created routine")
    const response = await axios.post('http://localhost:5000/api/v1/routines/routine', routine)
    //console.log(response.data.user)
    const routineObj = {routine:response.data._id}
    await updateSingleUserFromApi(response.data.user,routineObj );
    return response;
}
//GET single routine 
export const getSingleRoutineFromApi = async (id) => {
    const response = await axios.get(`http://localhost:5000/api/v1/routines/routine/${id}`);
    return response;
}

//UPDATE routine/:id
export const updateRoutineInApi = async (obj) => {
    const response = await axios.put(`http://localhost:5000/api/v1/routines/routine/${obj._id}`, obj);
    return response;
}
