import { Table } from "react-bootstrap"
import {Link} from 'react-router-dom'

const AdminHomeView = () => {
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
                    <tr>
                    <td>1</td>
                    <td>User1</td>
                    <td>
                        <Link
                            to="/addRoutine"
                            className="btn btn-warning">
                                Edit Routine
                        </Link>
                    </td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>User2</td>
                    <td>
                        <Link
                        to="/addRoutine"
                        className="btn btn-success">
                            Add Routine
                        </Link>
                    </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default AdminHomeView