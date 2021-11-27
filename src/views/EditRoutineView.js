import { useEffect, useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap"
import { useParams } from "react-router";

import {getAllExercises} from '../services/exerciseService'
import {getSingleRoutineFromApi,updateRoutineInApi} from '../services/routineService'
import {getSingleUserFromApi} from '../services/userService'

const EditRoutineView = () => {
    const [routine, setRoutine] = useState({});
    const [exercises, setExercises] = useState([]);
    const [user, setUser] = useState({});
    const { id } = useParams

    useEffect(() => {
        getRoutine();
        getExercises();
        fetchUser();
    })

    const getRoutine = async () => {
        const response = await getSingleRoutineFromApi(id);
        await setRoutine(response.data);
    }

    const getExercises = async () => {
        const response = await getAllExercises();
        setExercises(response.data)
    }

    const fetchUser = async () => {
        const response = await getSingleUserFromApi(id);
        setUser(response.data)
    }

    const handleRoutineChange = (event) => {
        setRoutine({
            ...routine,
            [event.target.name]: event.target.value
        });
        console.log(routine)
    }

    const handleSumbit = async (event) => {
        event.preventDefault();
        const response = await updateRoutineInApi(routine);
        getRoutine();   
    }

    return (
        <div className="container mt-5" >
            <div>
            <h2>Edit the routine for {user.name}</h2>
            <Form>
                <Form.Label>Name:</Form.Label>
                <Form.Select 
                    name = "exercise1"
                    value = {routine.exercise1}
                    onChange = {handleRoutineChange}
                    type="text" 
                    placeholder="Enter name of exercise" 
                    id = ""
                    >
                    <option>Dropdown</option>
                    {exercises.map((exercise) => (
                        <option key={exercise._id} value={exercise._id}>
                            {exercise.name}
                        </option>))}
                </Form.Select>
                <Form.Select 
                    name = "exercise2"
                    value = {routine.exercise2}
                    onChange = {handleRoutineChange}
                    type="text" 
                    placeholder="Enter name of exercise" 
                    id = ""
                    >
                    <option>Dropdown</option>
                    {exercises.map((exercise) => (
                        <option key={exercise._id} value={exercise._id}>
                            {exercise.name}
                        </option>))}
                </Form.Select>
                <Form.Select 
                    name = "exercise3"
                    value = {routine.exercise3}
                    onChange = {handleRoutineChange}
                    type="text" 
                    placeholder="Enter name of exercise" 
                    id = ""
                    >
                    <option>Dropdown</option>
                    {exercises.map((exercise) => (
                        <option key={exercise._id} value={exercise._id}>
                            {exercise.name}
                        </option>))}
                </Form.Select>
                
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        onChange={handleChange}
                        className="form-control"
                        name="notes"
                        as="textarea"
                        placeholder="Leave a comment for the user here"
                        style={{ height: '100px' }}
                        id = ""
                    />
                </FloatingLabel>
                <Button 
                    onClick={handleSumbit}
                    variant="primary" 
                    type="submit">
                    Update routine
                </Button>
            </Form>
            </div>
        </div>
    )
}

export default EditRoutineView;