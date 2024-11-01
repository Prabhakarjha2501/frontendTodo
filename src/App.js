import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Grid } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { TaskProvider } from './components/TaskContext';

function App() {
  return (
    
    <>
    <TaskProvider>
    <ToastContainer/>
      <Grid>
        <Grid>
          <TaskForm />
        </Grid>

        <Grid>
          <TaskList />
        </Grid>
      </Grid>
      </TaskProvider>
    </>
  );
}

export default App;
