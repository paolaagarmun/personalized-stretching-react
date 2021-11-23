import Button from "@restart/ui/esm/Button"
import { Form } from "react-bootstrap"

const AddExerciseView = () => {
    return (
        <div className="container mt-5" >
            <h2>It works!!!!!!!!</h2>
            <Form>
                
                <Form.Label>Name:</Form.Label>
                <Form.Control type="string" placeholder="Enter name of exercise" />

                <Form.Label>Focus??:</Form.Label>
                <Form.Control type="string" placeholder="Enter muscle or body area this exercise targets" />

                <Form.Label>Video URL:</Form.Label>
                <Form.Control type="string" placeholder="Enter a video link of demonstration if available" />
               
                <Form.Label>Image:</Form.Label>
                <Form.Control type="string" placeholder="Enter image of exercise demonstration" />
            
                <Form.Label>Deatils:</Form.Label>
                <Form.Control type="string" placeholder="Enter details or comments to share about this exercise" />

                <Button variant="primary" type="submit">
                    Create exercise
                </Button>
            </Form>
        </div>
    )
}

export default AddExerciseView