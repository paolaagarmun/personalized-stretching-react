import { useEffect, useState } from "react";
import { useParams } from 'react-router'
import {getSingleExerciseFromApi} from '../services/exerciseService'

import './ExerciseDetailsView.css'

const ExerciseDetailsView = () => {
    const [exercise, setExercise] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getSingleExercise();
    }, [])

    const getSingleExercise = async () => {
        const response = await getSingleExerciseFromApi(id);
        setExercise(response.data)
    }

    console.log("HERE:",exercise )
    const stretchingImage = "https://cdn-icons-png.flaticon.com/512/10/10606.png"
    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
            <h4 style={{fontWeight: "bold", marginTop: '30px'}}>{exercise.name}</h4>     
            <img className={"exerciseCardImage"} src={exercise?.image} alt=""/>
            <p>Target: {exercise.bodypartTarget}</p>
            <p>Explanation: {exercise.explanation}</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
            <iframe src={exercise.videoURL}></iframe>
            </div>
        </div>
    </div>
    )
}

export default ExerciseDetailsView