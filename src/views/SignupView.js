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
        console.log(user);
        signUpUser(user);
        setUser({
            name: "",
            email: "",
            password: "",
            weightCarried: "",
            sittingTime: "",
            standingTime: ""
        })
        navigate("/login");
        alert("User Created")
    }

    return (
        <div className="container">
            <form className="form-control">
                <h2>Sign Up</h2>
                <input
                    value={user.name}
                    name="name"
                    onChange={handleChange}
                    placeholder="name"
                    type="text"
                    
                />
                <input
                    value={user.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="email"
                    type="text"
                    
                />
                <input
                    value={user.password}
                    name="password"
                    onChange={handleChange}
                    placeholder="password"
                    type="password"
                    
                />
                <label>How much weight do you carry daily?:</label>
                <select
                    onChange={handleChange}
                    defaultValue={"title"}
                    className="mt-4"
                    name="weightCarried"
                    id="1"
                >   <option disabled value="title">
                        Select
                    </option>
                    <option value="1-5">1-5lbs</option>
                    <option value="5-10">5-10lbs</option>
                    <option value="10-15">10-15lbs</option>
                    <option value="15+">15+ lbs</option>
                </select>
                <label>Choose your average sitting time:</label>
                <select
                    onChange={handleChange}
                    defaultValue={"title"}
                    className="mt-4"
                    name="sittingTime"
                    id="2"
                >
                    <option disabled value="title">
                        Select
                    </option>
                    <option value="1-3hr">1-3 hours</option>
                    <option value="4-6hr">4-6 hours</option>
                    <option value="7+hr">7+ hours</option>
                </select>
                <label>Choose your average standing time:</label>
                <select
                    onChange={handleChange}
                    defaultValue={"title"}
                    className="mt-4"
                    name="standingTime"
                    id="3"
                >
                    <option disabled value="title">
                        Select
                    </option>
                    <option value="1-3">1-3 hours</option>
                    <option value="4-6">4-6 hours</option>
                    <option value="7+">7+ hours</option>
                </select>
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

 