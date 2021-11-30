import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { isAuthenticated, logOut } from '../services/authService'

import './NavBar.css'

const NavBar = () => {
    const user = isAuthenticated();
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {
                user.role === "ADMIN" && (
                  <>
                  <Link to="/adminHome">
                    <Image className="img-navbar" src="https://cdn-icons-png.flaticon.com/512/10/10699.png"
                        alt="logo"
                    />
                  </Link>
                  <Link to="/adminHome">Home</Link>
                  <Link to="/addExercise">Add Exercise</Link>
                  </>
                )
              }
            </Nav>
            <Nav className="links">
            
              {user.role === "USER" && (
                <>
                  <Link to={`/routine/${user.id}`}>
                    <Image className="img-navbar" src="https://cdn-icons-png.flaticon.com/512/10/10699.png"
                        alt="logo"
                    />
                  </Link>
                  <Link to={`/routine/${user.id}`}>Home</Link>
                  <a style={{ margin: '8px'}}>
                    Welcome, {user.name}
                  </a>
                  <Link to={`/profile/${user.id}`}>Profile</Link>
                  
                </>
                )}
                
                { user ? (
                  <button onClick={logOut} className="btn btn-outline-dark">
                    Sign out
                  </button>
                ) : (
                  <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Sign Up</Link>
                  </>
                )
                  
                }
                
                
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
    )
}

export default NavBar;