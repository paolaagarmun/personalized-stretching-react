import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { isAuthenticated, logOut } from '../services/authService'

import './NavBar.css'

const NavBar = () => {
    const user = isAuthenticated();
    return(
        <Navbar sticky="top" className="navbar" expand="lg">
        <Container>
        <Link className="name" to="/">Personalized Stretching</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
            <Nav className="me-auto adminNav">
              {
                user.role === "ADMIN" && (
                  <>
                  <Link to="/adminHome">
                    <Image className="img-navbar" src="https://cdn-icons-png.flaticon.com/512/10/10699.png"
                        alt="logo"
                    />
                  </Link>
                  <Link className="linksAdmin" to="/adminHome">Home</Link>
                  <Link className="linksAdmin addExercise"to="/addExercise">Add Exercise</Link>
                  </>
                )
              }
            </Nav>
            <Nav className="me-auto links">
            
              {user.role === "USER" && (
                <div className="userNav">
                  <Link to={`/routine/${user.id}`}>
                    <Image className="img-navbar" src="https://cdn-icons-png.flaticon.com/512/10/10699.png"
                        alt="logo"
                    />
                  </Link>
                  <Link to={`/routine/${user.id}`}>Home</Link>
                  
                  <Link to={`/profile/${user.id}`}>Profile</Link>
                  <div className="userWelcome" style={{ margin: '8px'}}>
                    Welcome, {user.name}
                  </div>
                </div>
                )}
                
                { user ? (
                  <button onClick={logOut} className="btn btn-outline-dark">
                    Sign out
                  </button>
                ) : (
                  <>
                  
                  <Link to="/login" className="logi-signup-link">Login</Link>
                  <Link to="/signup" className="logi-signup-link">Sign Up</Link>
                  </>
                )
                  
                }
                
                
            </Nav>
          
        </Container>
      </Navbar>
        
    )
}

export default NavBar;