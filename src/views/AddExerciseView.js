import { useEffect, useState } from "react"
import { createExercise, getAllExercises } from "../services/exerciseService"

import Button from "@restart/ui/esm/Button"
import { Form } from "react-bootstrap"
import ExerciseCard from "../components/ExerciseCard"

import './AddExercisesView.css'

const AddExerciseView = () => {
    const [preview, setPreview] = useState("");
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

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setExercise({
            ...exercise,
            image: imageFile,
        });
        setPreview(URL.createObjectURL(imageFile));
    }
    const handleSubmit = (event) => {
        console.log(exercise)
        event.preventDefault();
        createExercise(exercise);
        window.location.reload()
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
                <br/>
                <Form.Label>Body part this stretch focuses on:</Form.Label>
                <Form.Control 
                    name="bodypartTarget"
                    value={exercise.bodypartTarget}
                    onChange = {handleChange}
                    type="text" 
                    placeholder="Enter muscle or body area this exercise targets"

                />
                <br/>
                <Form.Label>Video URL:</Form.Label>
                <Form.Control 
                    name="videoURL"
                    value={exercise.videoURL}
                    onChange = {handleChange}
                    type="text" 
                    placeholder="Enter a video link of demonstration if available" 

                />
               <br/>
                <Form.Label>Image:</Form.Label>
                <Form.Control 
                    onChange={handleImageChange}
                    placeholder="Add image .jpg here"
                    name="image"
                    type="file" 
                    accept="image/*"
                />
                <br/>
                <Form.Label>Deatils:</Form.Label>
                <Form.Control 
                    name="explanation"
                    onChange = {handleChange}
                    type="string" 
                    placeholder="Enter details or comments to share about this exercise" 
                    
                />
                <br/>
                <Button className="btnSubmit"
                    onClick={handleSubmit}
                    variant="primary" 
                    type="submit">
                    CREATE EXERCISE
                </Button>
            </Form>  
            </div>
            <div className="d-flex" style={{height: "100vh"}}>
                <div className="vr"></div>
            </div>
            <div className="container exerciseCards">
            <h2 class="exerciseLib">Exercise library</h2>
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