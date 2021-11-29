import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import AdminHomeView from './views/AdminHomeView';
import AddExerciseView from './views/AddExerciseView';
import AddRoutineView from './views/AddRoutineView';
import EditRoutineView from './views/EditRoutineView';
import ExerciseDetailsView from './views/ExerciseDetailsView'
import SignupView from './views/SignupView';
import LoginView from './views/LoginView';
import AuthRoute from './components/AuthRoute'
import AdminRoute from './components/AdminRoute'
import UserProfileView from './views/UserProfileView'
import UserRoutineView from './views/UserRoutineView'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/signup" element={<SignupView/>}/>
        <Route path="/login" element={<LoginView/>}/>
      {/* Admin routes */}
      <Route element={<AdminRoute/>}/>
        <Route path="/adminHome" element={<AdminHomeView/>}/>
        <Route path="/addExercise" element={<AddExerciseView/>}/>
        <Route path="/addRoutine/:id" element={<AddRoutineView/>} />
        <Route path="/editRoutine/:id" element={<EditRoutineView/>}/>
      <Route element={<AuthRoute/>}/>
        <Route path="/exerciseDetails/:id" element={<ExerciseDetailsView/>}/>
        <Route path="/profile/:id" element={<UserProfileView/>} />
        <Route path="/routine/:id" element={<UserRoutineView/>} />
      </Routes>
      
    </>
  );
}

export default App;
