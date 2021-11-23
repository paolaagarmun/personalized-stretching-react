import { Form, Button, FloatingLabel } from "react-bootstrap"

const AddRoutineView = () => {
    return (
        <div className="container mt-5" >
            <Form>
                
                <Form.Label>Name:</Form.Label>
                <Form.Control type="string" placeholder="Enter name of exercise" />
                {/* get the name of the user with the user_id */}

                <Form.Label>Exercises:</Form.Label>
                <Form.Control type="string" placeholder="Enter muscle or body area this exercise targets" />
                {/* get the exercise from the exercise_id */}

                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment for the user here"
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <Button variant="primary" type="submit">
                    Create routine
                </Button>
            </Form>
        </div>
    )
}

export default AddRoutineView