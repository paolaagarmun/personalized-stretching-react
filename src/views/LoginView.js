import { useState } from "react"
import { useNavigate } from "react-router"
import { isAuthenticated, loginUserToApi } from "../services/authService"

import './LoginView.css'


const LoginView = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState (
        {
            email: "",
            password: ""
        }
    )

    const handleChange = (event) =>{
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userResponse = await loginUserToApi(user);
            console.log(userResponse);
            if (userResponse.data.role === 'ADMIN') {
                navigate("/adminHome");
            } else {
                navigate(`/routine/${userResponse.data._id}`);
            }
            await window.location.reload();
        } catch (error) {
            console.log(error)
        }

        setUser({
            email: "",
            password: ""
        })}
    
    return (
        <div className="container mt-5">
        <form className="form">
            <input
            onChange={handleChange}
            name="email" 
            value={user.email}
            className="form-control" type="text" placeholder="email" />
            <input
            onChange={handleChange}
            name="password" 
            value={user.password}
            className="form-control" type="password" placeholder="password" />
            <button
            onClick={handleSubmit}  
            className="form-control btn ">
                LOG IN
            </button>
        </form>
        </div>
  )
}


export default LoginView;