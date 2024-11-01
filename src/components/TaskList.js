// components/TaskList.js
import React, { useContext } from 'react';
import { Button, Checkbox, Typography, Card, CardContent, Grid, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
//import { TaskContext } from '../context/TaskContext';
import { TaskContext } from './TaskContext';

const TaskList = () => {
  const { tasks, filter, setFilter, removeTask, updateExistingTask } = useContext(TaskContext);

  return (
    <div>
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel>Filter Tasks</InputLabel>
        <Select value={filter} onChange={(e) => setFilter(e.target.value)} label="Filter Tasks">
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={2}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Grid item xs={12} md={6} key={task.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{task.task}</Typography>
                  <Checkbox
                    checked={task.completed}
                    onChange={() => updateExistingTask(task.id, { completed: !task.completed })}
                    color="primary"
                  />
                  <Typography variant="body2">{task.completed ? 'Completed' : 'Pending'}</Typography>
                  <Button color="secondary" onClick={() => removeTask(task.id)}>
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" style={{ textAlign: 'center', width: '100%' }}>No tasks available</Typography>
        )}
      </Grid>
    </div>
  );
};

export default TaskList;



































