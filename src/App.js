import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import AdminHomeView from './views/AdminHomeView';
import AddExerciseView from './views/AddExerciseView';
import AddRoutineView from './views/AddRoutineView';
import EditRoutineView from './views/EditRoutineView';
import ExerciseDetailsView from './views/ExerciseDetailsView'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<AdminHomeView/>}/>
        <Route path="/addExercise" element={<AddExerciseView/>}/>
        <Route path="/addRoutine/:id" element={<AddRoutineView/>} />
        <Route path="/editRoutine/:id" element={<EditRoutineView/>}/>
        <Route path="/exerciseDetails/:id" element={<ExerciseDetailsView/>}/>
      </Routes>
      
    </>
  );
}

export default App;
