import { useEffect, useState } from "react";
import { useParams } from 'react-router'
import {getSingleExerciseFromApi} from '../services/exerciseService'

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
            <h2 style={{fontWeight: "bold", marginTop: '40px'}}>{exercise.name}</h2>     
            <img className={"exerciseCardImage"} src={exercise?.image} alt=""/>
            <h4>Target: {exercise.bodypartTarget}</h4>
            <h4>Explanation: {exercise.explanation}</h4>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
            <div>{exercise.videoURL}</div>
            </div>
        </div>
    </div>
    )
}

export default ExerciseDetailsView