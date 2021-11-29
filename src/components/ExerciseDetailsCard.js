import React from "react";


import './ExerciseDetailsCard.css'


const stretchingImage = "https://cdn-icons-png.flaticon.com/512/10/10606.png"

const ExerciseDetailsCard = ({obj}) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                <h2 style={{fontWeight: "bold", marginTop: '40px'}}>{exercise.name}</h2>     
                <img className={"exerciseCardImage"} src={obj.image ? obj.image : stretchingImage} alt=""/>
                <h4>Target: {exercise.bodypartTarget}</h4>
                <h4>Explanation: {exercise.explanation}</h4>
                {/* {user.role === "ADMIN" && (
                    <Link to={`/editCoffee/${id}`} className="btn-outline-dark btn">Edit</Link>
                )} */}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <div>{exercise.videoURL}</div>
                </div>
            </div>
        </div>
    )
}

export default ExerciseDetailsCard;