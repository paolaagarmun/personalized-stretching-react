
import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { Table } from "react-bootstrap"
import {Link} from 'react-router-dom'
import { getAllUsers } from "../services/userService";

const AdminHomeView = () => {
    //need state for users
    const [users, setUsers] = useState([]);

    //need api call
    useEffect(() => {
        getUsers();
        console.log(users)
    }, [])

    const getUsers = async () => {
        const response = await getAllUsers();
        setUsers(response.data);
    }

    


    return (
        <div className="container mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{user.name}</td>
                            <td>
                                {!user.routine ? 
                                        <Link
                                            to={`/addRoutine/${user._id}`}
                                            className="btn btn-success">
                                                Add Routine
                                        </Link>
                                    : 
                                        <Link
                                            to={`/editRoutine/${user._id}`}
                                            className="btn btn-warning">
                                                Edit Routine
                                        </Link> 
                                    
                                }
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default AdminHomeView