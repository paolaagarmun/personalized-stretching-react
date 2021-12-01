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
import UserHomeView from './views/UserHomeView'
import MainPageView from './views/MainPageView';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPageView/>}/>
        <Route path="/signup" element={<SignupView/>}/>
        <Route path="/login" element={<LoginView/>}/>
        {/* Admin routes */}
        <Route element={<AdminRoute/>}>
          <Route path="/adminHome" element={<AdminHomeView/>}/>
          <Route path="/addExercise" element={<AddExerciseView/>}/>
          <Route path="/addRoutine/:id" element={<AddRoutineView/>} />
          <Route path="/editRoutine/:id" element={<EditRoutineView/>}/>
        </Route>
        <Route element={<AuthRoute/>}>
          <Route path="/exerciseDetails/:id" element={<ExerciseDetailsView/>}/>
          <Route path="/profile/:id" element={<UserProfileView/>} />
          <Route path="/routine/:id" element={<UserHomeView/>} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
