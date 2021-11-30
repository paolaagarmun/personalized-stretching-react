import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router";
import {getSingleUserFromApi} from '../services/userService'
import { Link } from "react-router-dom";


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
    console.log("USER:", userLoggedIn);
    //will need Link to single exercise view
    return (
        
        <>
        <h2>Welcome, {userLoggedIn.name}</h2>
        
            {!userLoggedIn.routine ? 
                <h4>No routines yet</h4>
            : 
               <div>
               <h4>This is your routine</h4>
               
               <p>{userLoggedIn.routine.exercise1?.name}</p>
               <div>
                <Link to={`/exerciseDetails/${userLoggedIn.routine.exercise1._id}`} className="buttonCard btn btn-primary">
                    View More
                </Link>
               </div>
               <p>{userLoggedIn.routine.exercise2?.name}</p>
               <Link to={`/exerciseDetails/${userLoggedIn.routine.exercise2._id}`} className="buttonCard btn btn-primary">
                    View More
                </Link>
               <p>{userLoggedIn.routine.exercise3?.name}</p>
               <p>{userLoggedIn.routine.notes}</p>

                </div>
                                    
            }
        
        
        </>
    )
}

export default UserHomeView;