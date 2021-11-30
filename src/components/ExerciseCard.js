import React from "react";
import { Card } from "react-bootstrap"
import { useParams } from "react-router";
import { deleteSingleExercise } from '../services/exerciseService'

import './ExerciseCard.css'


const stretchingImage = "https://cdn-icons-png.flaticon.com/512/10/10606.png"

const ExerciseCard = ({obj}) => {
    

    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await deleteSingleExercise(obj._id)
        window.location.reload()
    }

    console.log("OBJ", obj)
    return (
        <Card style={{width: "12rem"}}>
            <Card.Body className="card-component">
                <Card.Title>
                    {obj.name}
                </Card.Title>
                <img className={"exerciseCardImage"} src={obj.image ? obj.image : stretchingImage} alt=""/>
                <button
                    onClick={handleDelete}
                >
                    Delete Exercise
                </button>
            </Card.Body>
        </Card>
    )
}

export default ExerciseCard;