import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import AdminHomeView from './views/AdminHomeView';
import AddExerciseView from './views/AddExerciseView';
import AddRoutineView from './views/AddRoutineView';
import EditRoutineView from './views/EditRoutineView';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<AdminHomeView/>}/>
        <Route path="/addExercise" element={<AddExerciseView/>}/>
        <Route path="/addRoutine" element={<AddRoutineView/>}/>
        <Route path="/editRoutine" element={<EditRoutineView/>}/>
      </Routes>
      
    </>
  );
}

export default App;
