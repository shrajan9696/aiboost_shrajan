import logo from './logo.svg';
import './App.css';
import OutlinedCard from './components/OutlinedCard';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import GridTemplate from './components/GridTemplate'
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
    <h3 class="text-3xl font-bold dark:text-white my-4">Multiple AI Content Generator Features / Use Case </h3>
   <NavBar/>
 
    <GridTemplate/>
    </div>
  );
}

export default App;
