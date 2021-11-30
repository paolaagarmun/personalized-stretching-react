import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {getSingleUserFromApi} from '../services/userService'

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
        {userLoggedIn.name}
        <br/>
        {userLoggedIn.weightCarried}
        <br/>
        {userLoggedIn.sittingTime}
        <br/>
        {userLoggedIn.standingTime}

        </>
    )
}

export default UserProfileView