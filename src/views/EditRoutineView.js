import { useEffect, useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap"
import { useParams } from "react-router";

import {getAllExercises} from '../services/exerciseService'
import {getSingleRoutineFromApi,updateRoutineInApi} from '../services/routineService'
import {getSingleUserFromApi} from '../services/userService'

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

    
    // console.log("routine object:",user.routine)

    useEffect(() => {
        fetchUser();
        getExercises();
    }, [])
    
    useEffect(() => {
        getRoutine();
    }, [routine])

    const getRoutine = async () => {
        console.log("ROUTINE", user.routine);
        // const response = await getSingleRoutineFromApi(user.routine._id);
        // await setRoutine(response.data);
        // console.log("ROUTINE", response.data);
        // setRoutine({
        //     ...routine,
        //     notes: user.routine.notes
        // })
    }
    
    const getExercises = async () => {
        const response = await getAllExercises();
        setExercises(response.data);
        
    }
    
    const fetchUser = async () => {
        const response = await getSingleUserFromApi(id);
        await setUser(response.data)
        await setRoutine({
            ...routine,
            notes: user.routine?.notes
        })
        console.log(user);
    }

    const handleRoutineChange = (event) => {
        setRoutine({
            ...routine,
            [event.target.name]: event.target.value
        });
        // console.log(routine)
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
                <Form.Label>Current: {user.routine?.exercise1.name}</Form.Label>
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
                <Form.Label>Current: {user.routine?.exercise2.name}</Form.Label>
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
                <Form.Label>Current: {user.routine?.exercise3.name}</Form.Label>
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
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        onChange={handleRoutineChange}
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