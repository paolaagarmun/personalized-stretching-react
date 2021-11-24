import { useEffect, useState } from "react";
import ExerciseCard from "../components/ExerciseCard";
import { getAllExercises } from "../services/exerciseService";


const ExercisesView = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        getExercise();
    }, [])

    const getExercise = async () => {
        const response = await getAllExercises();
        setExercises(response.data)
    }

    return (
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
    )
}

export default ExercisesView;