import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router";
import {getSingleUserFromApi} from '../services/userService'
import { Link } from "react-router-dom";

import './UserHomeView.css'

const UserHomeView = () => {
    const [userLoggedIn, setUserLoggedIn] = useState({})
    const {id} = useParams();
    

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const response = await getSingleUserFromApi(id);
        setUserLoggedIn(response.data)
    }
  // console.log("USER:", userLoggedIn);
    //will need Link to single exercise view
    return (
        
        <>
        <h3 className="welcomeMsg">Hey, {userLoggedIn.name}!</h3>
        
            {!userLoggedIn.routine ? 
                <h4>We are still working on your routine, please come back in a bit!</h4>
            : 
               <div>
               <h4 className="routineTitle">This is your routine:</h4>

               <div className="routineContainer">
                <div>
                <p className="linediv">________________</p>
                <p className="exerciseName">{userLoggedIn.routine?.exercise1?.name}</p>
                
                    <Link to={`/exerciseDetails/${userLoggedIn.routine.exercise1?._id}`} className="btnViewmore">
                        View More
                    </Link>
                <p className="linediv">________________</p>
                <p className="exerciseName">{userLoggedIn.routine?.exercise2?.name}</p>
                <Link to={`/exerciseDetails/${userLoggedIn.routine.exercise2?._id}`} className="btnViewmore">
                        View More
                </Link>
                <p className="linediv">________________</p>
                <p className="exerciseName">{userLoggedIn.routine?.exercise3?.name}</p>
                <Link to={`/exerciseDetails/${userLoggedIn.routine.exercise3?._id}`} className="btnViewmore">
                        View More
                    </Link>
                    </div>
                    <div className="notes">
                        <p>{userLoggedIn.routine.notes}</p>
                    </div>

               </div>
               
               

                </div>
                                    
            }
        
        
        </>
    )
}

export default UserHomeView;