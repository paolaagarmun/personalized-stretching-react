import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {getSingleUserFromApi} from '../services/userService'

import './UserHomeView.css'

//get a single user
//display their profile - name, answer to questions

const UserProfileView = () => {
    const [userLoggedIn, setUserLoggedIn] = useState({})
    const { id } = useParams();

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const response = await getSingleUserFromApi(id)
        setUserLoggedIn(response.data);
    }
 
    return (
        <>
        <div className="name username">
            {userLoggedIn.name}
        </div>
        <div className="questionnaireanswers">
            <p>1. You carry an average of <span className="answers">{userLoggedIn.weightCarried}</span> pounds daily </p>
            <br/>
            <p>2. You are sitting an average of <span className="answers">{userLoggedIn.sittingTime}s</span> daily</p>
            <br/>
            <p>3. You are standing up an average of <span className="answers">{userLoggedIn.standingTime}hrs</span> daily</p>
        </div>
       
        
        </>
    )
}

export default UserProfileView