import { useEffect, useState } from "react"
import { createExercise, getAllExercises } from "../services/exerciseService"

import Button from "@restart/ui/esm/Button"
import { Form } from "react-bootstrap"
import ExerciseCard from "../components/ExerciseCard"

import './AddExercisesView.css'

const AddExerciseView = () => {

    const [exercise, setExercise] = useState({
        name: "",
        bodypartTarget: "",
        videoURL: "",
        image: "",
        explanation: ""
    })

    const handleChange = (event) => {
        setExercise({
            ...exercise,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        console.log(exercise)
        event.preventDefault();
        createExercise(exercise);
    }

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        getExercise();
    }, [])

    const getExercise = async () => {
        const response = await getAllExercises();
        setExercises(response.data)
    }

    return (
        <div className="mainDiv container mt-5" >
            <div>
            <h2>Add a new exercise:</h2>
            <Form className="addExerciseForm">
                <Form.Label>Name:</Form.Label>
                <Form.Control 
                    name="name"
                    value={exercise.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Enter name of exercise" 
                />

                <Form.Label>Focus??:</Form.Label>
                <Form.Control 
                    name="bodypartTarget"
                    value={exercise.bodypartTarget}
                    onChange = {handleChange}
                    type="text" 
                    placeholder="Enter muscle or body area this exercise targets"

                />

                <Form.Label>Video URL:</Form.Label>
                <Form.Control 
                    name="videoURL"
                    value={exercise.videoURL}
                    onChange = {handleChange}
                    type="text" 
                    placeholder="Enter a video link of demonstration if available" 

                />
               
                <Form.Label>Image:</Form.Label>
                <Form.Control 
                    name="image"
                    type="string" 
                    placeholder="TO-DO"
                
                />
            
                <Form.Label>Deatils:</Form.Label>
                <Form.Control 
                    name="explanation"
                    onChange = {handleChange}
                    type="string" 
                    placeholder="Enter details or comments to share about this exercise" 
                    
                />

                <Button 
                    onClick={handleSubmit}
                    variant="primary" 
                    type="submit">
                    Create exercise
                </Button>
            </Form>  
            </div>
            <div class="d-flex" style={{height: "100vh"}}>
                <div class="vr"></div>
            </div>
            <div className="container mt-3">
            <h2>Exercise library</h2>
            <div className="container">
                { exercises.length === 0 && (
                    <h2>No exercises in library</h2>
                )}
                <div className="row">
                    { exercises.map(exercise => (
                        <div key={exercise._id} className="cardBox col-lg-4 col-md-6 col-sm-12">
                            <ExerciseCard obj={exercise}/>
                        </div>
                    ))}
                </div>

            </div>

        </div>
        </div>
    )
}

export default AddExerciseView