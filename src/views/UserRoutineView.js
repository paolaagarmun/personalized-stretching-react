import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router";
import {getSingleUserFromApi} from '../services/userService'
import { Link } from "react-router-dom";


const UserRoutineView = () => {
    const [userLoggedIn, setUserLoggedIn] = useState({})
    const {id} = useParams();
    

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const response = await getSingleUserFromApi(id);
        setUserLoggedIn(response.data)
    }
    console.log("USER:", userLoggedIn);
    //will need Link to single exercise view
    return (
        
        <>
        <h2>My routine:</h2>
        <div>
            Notes: {userLoggedIn.routine.notes}
        </div>
        <div>
            <div>Exercise 1</div>
            <div>Exercise 2</div>
            <div>Exercise 3</div>
        </div>
        </>
    )
}

export default UserRoutineView;