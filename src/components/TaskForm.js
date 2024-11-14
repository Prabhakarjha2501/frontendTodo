import React, { useContext, useEffect, useState } from 'react';
import { Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { TaskContext } from './TaskContext';


const TaskForm = ({ task,onClose }) => {
  const { addNewTask, updateExistingTask } = useContext(TaskContext);
  const [taskInput, setTaskInput] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);


  useEffect(() => {
    if (task) {
      setTaskInput(task.task);
      setIsCompleted(task.completed);
    }
    else{
      setTaskInput('');
      setIsCompleted(false);
    }
  }, [task]);

  


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task) {
      await updateExistingTask(task.id, { task: taskInput, completed: isCompleted });
    } else {
      await addNewTask({ task: taskInput, completed: isCompleted });
    }
    setTaskInput('');
    setIsCompleted(false);
    onClose();
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

















