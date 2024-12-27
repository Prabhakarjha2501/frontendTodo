import React, { useState } from 'react'
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Box, Grid } from '@mui/material';
import Contactus from './Heading';
import Heading from './Heading';

const Layout = () => {

  const [editTask, setEditTask] = useState(null);

  const openEditForm = (task) => {
    setEditTask(task);
  };

  const closeEditForm = () => {
    setEditTask(null);
  };


  return (
    <>
      <Box sx={{margin:4}}>
        <Grid>
          <Grid item xs={12}>
            <TaskForm task={editTask} onClose={closeEditForm} />
          </Grid>
          <Grid item xs={12}>
            <TaskList openEditForm={openEditForm} />
           
          </Grid>
          <Grid item xs={12}>
           <Heading/>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Layout
