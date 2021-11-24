import axios from 'axios'

//POST routine
export const createRoutineInApi = async (routine) => {
    alert("created routine")
    const response = await axios.post('http://localhost:5000/api/v1/routines/routine', routine)
    return response;
}

//UPDATE routine/:id
export const updateRoutineInApi = async (obj) => {
    const {...exercise} = obj
    const response = await axios.put(`http://localhost:5000/api/v1/routines/routine/${obj._id}`, exercise)
}
