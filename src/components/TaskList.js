import React, { useContext, useState } from 'react';
import { Button, Checkbox, Typography, Card, CardContent, Grid, MenuItem, Select, FormControl, InputLabel, TablePagination, CircularProgress } from '@mui/material';
import { TaskContext } from './TaskContext';

const TaskList = ({ openEditForm }) => {
  const { tasks, filter, setFilter, removeTask, page, setPage, totalPages } = useContext(TaskContext);

  const handlePageChange = (event, newPage) => {
    setPage(newPage + 1);
  };


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
                    // onChange={() => updateExistingTask(task.id, { completed: !task.completed })}
                    color="primary"
                  />
                  <Typography variant="body2">{task.completed ? 'Completed' : 'Pending'}</Typography>
                  <Button color="secondary" onClick={() => removeTask(task.id)}>
                    Delete
                  </Button>
                  <Button color="primary" onClick={() => openEditForm(task)}>
                    Update
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" style={{textAlign: 'center', width: '100%',marginTop:'20px' }}>No task in this component</Typography>
        )}
      </Grid>
     
      <TablePagination
        component="Box"
        count={totalPages * 10}  // total items calculated by total pages and items per page
        page={page - 1}  // Adjust for zero-based index
        onPageChange={handlePageChange}
        rowsPerPage={10}
        rowsPerPageOptions={[10]}  // Fixed rows per page to match the limit
      //onRowsPerPageChange={handleRowsPerPageChange}
      />

    </div>
  );
};

export default TaskList;



































