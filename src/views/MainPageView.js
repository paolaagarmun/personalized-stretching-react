import { Link } from 'react-router-dom';
import './MainPageView.css'

function MainPageView() {
    return(
        <div className="mainpage">
            
                <div className="welcome">
                <h4>
                Welcome to your personalized stretching guide...
                </h4>
                <p>We are here to help you achieve your optimal body mobility
                    and enhance your overall daily performance.</p>
                <br/>
                <br/>
                <Link className="link" to="/signup">GET STARTED</Link>
                </div>
                
                <div className="why">
                <h4><i>Why stretching?</i></h4>
                <p>Stretching keeps the muscles flexible, strong, and healthy, and we need 
                    that flexibility to maintain a range of motion in the joints. Without it, 
                    the muscles shorten and become tight. Then, when you call on the muscles 
                    for activity, they are weak and unable to extend all the way. That puts 
                    you at risk for joint pain, strains, and muscle damage.</p>
                    <p style={{fontSize: "x-small", fontStyle: "bold"}}>Ref: "https://www.health.harvard.edu/staying-healthy/the-importance-of-stretching"</p>
                </div>
                
                <p className="seeyou1">Stretching is a practice that can last from a couple of minutes during the day or full length routines.
                <br/>At Personalized Stretching we want to inlcude stretching into your life in a way that accommodates to
                your lifestyle and time.</p>
                <div className="howitworks">
                    <p className="line">___________________________________________________</p>
                    <h4><i>How this app works?</i></h4>
                    <p>When you sign up you'll be prompted a series of questions regarding your daily activities.
                    <br/>Then, a group of professionals will prepare a routine that consists only of three streching movements
                    and add a personalized note for you! </p>
                </div>
                
                    
                <h4 className="seeyou">✣ See you then ✣ </h4>
            
        </div>
    )
}

export default MainPageView;