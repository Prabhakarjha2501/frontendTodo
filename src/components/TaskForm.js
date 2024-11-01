// components/TaskForm.js
import React, { useContext, useState } from 'react';
import { Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
//import { TaskContext } from '../context/TaskContext';
import { TaskContext } from './TaskContext';


const TaskForm = ({ task }) => {
  const { addNewTask, updateExistingTask } = useContext(TaskContext);
  const [taskInput, setTaskInput] = useState(task?.task || '');
  const [isCompleted, setIsCompleted] = useState(task?.completed || false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task) {
      await updateExistingTask(task.id, { task: taskInput, completed: isCompleted });
    } else {
      await addNewTask({ task: taskInput, completed: isCompleted });
    }
    setTaskInput('');
    setIsCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        label="Task"
        fullWidth
        required
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
            color="primary"
          />
        }
        label="Completed"
      />
      <Button type="submit" variant="contained" color="primary">
        {task ? 'Update Task' : 'Add Task'}
      </Button>
    </form>
  );
};

export default TaskForm;




























// // components/TaskForm.js
// import React, { useState } from 'react';
// import { Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
// import { addTask, updateTask } from '../api/api';
// import { showToast } from '../utils/toastConfig';

// const TaskForm = ({ task }) => {
//   const [taskInput, setTaskInput] = useState(task?.task || '');
//   const [isCompleted, setIsCompleted] = useState(task?.completed || false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (task) {
//         // Update task
//         await updateTask(task.id, { task: taskInput, completed: isCompleted });
//         showToast('Task updated successfully');
//       } else {
//         // Add new task
//         await addTask({ task: taskInput, completed: isCompleted });
//         showToast('Task added successfully');
//       }
//      // fetchTasks(); // Refresh task list
//       setTaskInput(''); // Clear the input field
//       setIsCompleted(false); // Reset completion status
//     } catch (error) {
//       showToast('Failed to save task', 'error');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         value={taskInput}
//         onChange={(e) => setTaskInput(e.target.value)}
//         label="Task"
//         fullWidth
//         required
//       />
//       <FormControlLabel
//         control={
//           <Checkbox
//             checked={isCompleted}
//             onChange={(e) => setIsCompleted(e.target.checked)}
//             color="primary"
//           />
//         }
//         label="Completed"
//       />
//       <Button type="submit" variant="contained" color="primary">
//         {task ? 'Update Task' : 'Add Task'}
//       </Button>
//     </form>
//   );
// };

// export default TaskForm;
