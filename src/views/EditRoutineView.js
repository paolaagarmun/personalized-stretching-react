import { useEffect, useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap"
import { useParams } from "react-router";

import {getAllExercises} from '../services/exerciseService'
import {getSingleRoutineFromApi,updateRoutineInApi} from '../services/routineService'
import {getSingleUserFromApi} from '../services/userService'

import './AddExercisesView.css'

const EditRoutineView = () => {
    const [routine, setRoutine] = useState({
        exercise1: "",
        exercise2: "",
        exercise3: "",
        notes: ""
    });
    const [exercises, setExercises] = useState([]);
    const [user, setUser] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        fetchUser();
        getExercises();
    }, [])

    // set user, state 
    useEffect(() => {
        setRoutine({
            exercise1: user.routine?.exercise1,
            exercise2: user.routine?.exercise2,
            exercise3: user.routine?.exercise3,
            notes: user.routine?.notes
        })
    }, [user])
    
    const getExercises = async () => {
        const response = await getAllExercises();
        setExercises(response.data);
    }
    
    const fetchUser = async () => {
        const response = await getSingleUserFromApi(id);
        setUser(response.data)
       // console.log(user);
    }

    const handleRoutineChange = (event) => {
        setRoutine({
            ...routine,
            [event.target.name]: event.target.value
        });
    }

    const handleSumbit = async (event) => {
        event.preventDefault();
        //console.log(routine)
        const response = await updateRoutineInApi({_id: user.routine._id, ...routine});
        fetchUser();
    }

    return (
        <div className="container mt-5" >
            <div>
            <h2>Edit the routine for {user.name}</h2>
            <Form className="addRoutineform ">
                <Form.Label>Current: {user.routine?.exercise1?.name}</Form.Label>
                <Form.Select 
                    name = "exercise1"
                    value = {routine.exercise1}
                    onChange = {handleRoutineChange}
                    type="text" 
                    id = ""
                    >
                    <option>Select stretch movement</option>
                    {exercises.map((exercise) => (
                        <option key={exercise._id} value={exercise._id}>
                            {exercise.name}
                        </option>))}
                </Form.Select>
                <Form.Label>Current: {user.routine?.exercise2?.name}</Form.Label>
                <Form.Select 
                    name = "exercise2"
                    value = {routine.exercise2}
                    onChange = {handleRoutineChange}
                    type="text" 
                    id = ""
                    >
                    <option>Select stretch movement</option>
                    {exercises.map((exercise) => (
                        <option key={exercise._id} value={exercise._id}>
                            {exercise.name}
                        </option>))}
                </Form.Select>
                <Form.Label>Current: {user.routine?.exercise3?.name}</Form.Label>
                <Form.Select 
                    name = "exercise3"
                    value = {routine.exercise3}
                    onChange = {handleRoutineChange}
                    type="text" 
                    id = ""
                    >
                    <option>Select stretch movement</option>
                    {exercises.map((exercise) => (
                        <option key={exercise._id} value={exercise._id}>
                            {exercise.name}
                        </option>))}
                </Form.Select>
                <br/>
                Open space to write details about the routine or other comments:
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        value={routine.notes}
                        onChange={handleRoutineChange}
                        className="form-control"
                        name="notes"
                        as="textarea"
                        placeholder="Leave a comment for the user here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <Button 
                    className="routineSubmitBtn"
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