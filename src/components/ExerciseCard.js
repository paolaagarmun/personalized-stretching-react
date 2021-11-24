import React from "react";
import { Card } from "react-bootstrap"

import './ExerciseCard.css'


const stretchingImage = "https://cdn-icons-png.flaticon.com/512/10/10606.png"

const ExerciseCard = ({obj}) => {
    return (
        <Card style={{width: "12rem"}}>
            <Card.Body className="card-component">
                <Card.Title>
                    {obj.name}
                </Card.Title>
                <img className={"exerciseCardImage"} src={obj.image ? obj.image : stretchingImage} alt=""/>
            </Card.Body>
        </Card>
    )
}

export default ExerciseCard;