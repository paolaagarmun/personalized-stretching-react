import { useEffect, useState } from "react"
import { Form, Button, FloatingLabel } from "react-bootstrap"
import { useParams } from "react-router";
import { getAllExercises } from "../services/exerciseService";
import { createRoutineInApi } from "../services/routineService";
import { getSingleUserFromApi } from "../services/userService";

const AddRoutineView = () => {
    const [exercises, setExercises] = useState([])
    const [routine, setRoutines] = useState({});
    const [user, setUser] = useState({});

    const {id} = useParams();

    useEffect(() => {
        fetchExercises();
        fetchUser();
    }, [])

    const fetchUser = async () => {
        const response = await getSingleUserFromApi(id);
        setUser(response.data)
    }

    const fetchExercises = async () => {
        const response = await getAllExercises();
        setExercises(response.data)
    }

    const handleChange = (event) => {
        setRoutines({
            ...routine,
            [event.target.name]: event.target.value
        });
    }
    
    const handleSubmit = (event) => {
        console.log(routine)
        event.preventDefault();
        let obj = {
            ...routine,
            user: id
        }
        console.log(obj);
        createRoutineInApi(obj);
    }
    

    return (
        <div className="container mt-5" >
            <h2>{user.name}'s Routine</h2>
            <Form>
                
                <Form.Label>Select first exercise:</Form.Label>
                <Form.Select 
                    aria-label="Default select example"
                    onChange={handleChange}
                    className="form-control"
                    name="exercise1"
                    id = ""
                    >
                    <option>Dropdown</option>
                    {exercises.map((exercise) => (
                        <option key={exercise._id} value={exercise._id}>
                            {exercise.name}
                        </option>
                    ))}
                </Form.Select>

                <Form.Label>Select second exercise:</Form.Label>
                <Form.Select 
                    aria-label="Default select example"
                    onChange={handleChange}
                    className="form-control"
                    name="exercise2"
                    id = ""
                    >
                    <option>Dropdown</option>
                    {exercises.map((exercise) => (
                        <option key={exercise._id} value={exercise._id}>
                            {exercise.name}
                        </option>
                    ))}
                </Form.Select>

                <Form.Label>Select third exercise:</Form.Label>
                <Form.Select 
                    aria-label="Default select example"
                    onChange={handleChange}
                    className="form-control"
                    name="exercise3"
                    id = ""
                    >
                    <option>Dropdown</option>
                    {exercises.map((exercise) => (
                        <option key={exercise._id} value={exercise._id}>
                            {exercise.name}
                        </option>
                    ))}
                </Form.Select>

                
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    onChange={handleChange}
                    className="form-control"
                    name="notes"
                    as="textarea"
                    placeholder="Leave a comment for the user here"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <Button 
                    onClick={handleSubmit}
                    variant="primary" 
                    type="submit">
                    Create routine
                </Button>
            </Form>
        </div>
    )
}

export default AddRoutineView