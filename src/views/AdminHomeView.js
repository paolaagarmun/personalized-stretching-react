import { Table } from "react-bootstrap"

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
                    <td>Edit Routine</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>User2</td>
                    <td>Add Routine</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default AdminHomeView