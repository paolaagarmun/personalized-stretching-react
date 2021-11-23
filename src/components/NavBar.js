import { Navbar, Container, Nav, Image } from 'react-bootstrap'

import './NavBar.css'

const NavBar = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="https://cdn-icons-png.flaticon.com/512/10/10699.png"
                alt="logo"
            />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Add Exercise</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
    )
}

export default NavBar;