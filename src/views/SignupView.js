import { useState } from "react";
import { signUpUser } from "../services/authService";
import { useNavigate } from 'react-router';

const SignupView = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        weightCarried: "",
        handUse: "",
        sittingTime: "",
        standingTime: ""
    });

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        signUpUser(user);
        setUser({
            name: "",
            email: "",
            password: "",
            weightCarried: "",
            handUse: "",
            sittingTime: "",
            standingTime: ""
        })
        navigate("/login");
        alert("User Created")
    }

    return (
        <div className="container">
            <form className="form">
                <h2>Sign Up</h2>
                <input
                    value={user.name}
                    name="name"
                    onChange={handleChange}
                    placeholder="name"
                    type="text"
                    className="form-control"
                />
                <input
                    value={user.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="email"
                    type="text"
                    className="form-control"
                />
                <input
                    value={user.password}
                    name="password"
                    onChange={handleChange}
                    placeholder="password"
                    type="password"
                    className="form-control"
                />
                <input
                    value={user.weightCarried}
                    name="weightCarried"
                    onChange={handleChange}
                    placeholder="weightCarried"
                    type="text"
                    className="form-control"
                />
                <input
                    value={user.handUse}
                    name="handUse"
                    onChange={handleChange}
                    placeholder="handUse"
                    type="text"
                    className="form-control"
                />
                <input
                    value={user.sittingTime}
                    name="sittingTime"
                    onChange={handleChange}
                    placeholder="sittingTime"
                    type="text"
                    className="form-control"
                />
                <input
                    value={user.standingTime}
                    name="standingTime"
                    onChange={handleChange}
                    placeholder="standingTime"
                    type="text"
                    className="form-control"
                />
                <button
                    onClick={handleSubmit}
                    className="form-control btn btn-success"
                >
                Sign up 
                </button>
            </form>
        </div>
    )
}

export default SignupView;

 