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
        <div className="userProfile">
        <img src="https://cdn-icons-png.flaticon.com/512/10/10699.png" alt=""/>
        <div className="userinfo">
            <div className="name username">
                {userLoggedIn.name}
            </div>
            <br/>
            <div className="questionnaireanswers">
                <p>1. You carry an average of <span className="answers">{userLoggedIn.weightCarried}lbs</span> daily </p>
                <br/>
                <p>2. You are sitting an average of <span className="answers">{userLoggedIn.sittingTime}s</span> daily</p>
                <br/>
                <p>3. You are standing up an average of <span className="answers">{userLoggedIn.standingTime}hrs</span> daily</p>
            </div> 
        </div>
          
        </div>
        
       
        
        </>
    )
}

export default UserProfileView