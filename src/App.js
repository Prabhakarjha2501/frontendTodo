import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Grid } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { TaskProvider } from './components/TaskContext';
import { useState } from 'react';
import Layout from './components/Layout';

function App() {
  
  // const [editTask, setEditTask] = useState(null); // State for task to be edited

  // const openEditForm = (task) => {
  //   setEditTask(task); // Set the task to edit
  // };

  // const closeEditForm = () => {
  //   setEditTask(null); // Clear the edit state to close the form
  // };

  return (
    <TaskProvider>
      <ToastContainer />
      <Layout/>
    </TaskProvider>
  );
}

export default App;



// <Grid>
//         {/* TaskForm handles both add and edit based on editTask prop */}
//         <Grid item xs={12}>
//           <TaskForm task={editTask} onClose={closeEditForm} />
//         </Grid>
//         <Grid item xs={12}>
//           {/* Pass openEditForm to TaskList */}
//           <TaskList openEditForm={openEditForm} />
//         </Grid>
//       </Grid>