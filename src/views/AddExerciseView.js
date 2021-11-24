import { useState } from "react"
import { createExercise } from "../services/exerciseService"

import Button from "@restart/ui/esm/Button"
import { Form } from "react-bootstrap"

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

    return (
        <div className="container mt-5" >
            <h2>It works!!!!!!!!</h2>
            <Form>
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
    )
}

export default AddExerciseView