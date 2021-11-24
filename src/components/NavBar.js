import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">
            <Image className="img-navbar" src="https://cdn-icons-png.flaticon.com/512/10/10699.png"
                alt="logo"
            />
            </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/addExercise">Add Exercise</Link>
              <Link to="/exercisesLibrary">Exercises</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
    )
}

export default NavBar;