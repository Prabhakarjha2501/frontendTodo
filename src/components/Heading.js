import React from 'react'
import { Box, TextField, Button, Typography } from '@mui/material';
const Heading = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 4,
        margin: 4,
      }}
    >
      <Typography 
        variant="h4" 
        component="h1" 
        sx={{ fontWeight: 'bold', marginBottom: 2 }}
      >
        Contact Us Page
      </Typography>
      <Box 
        component="form" 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          maxWidth: 400,
        }}
      >
        <TextField 
          label="Name" 
          variant="outlined" 
          fullWidth 
        />
        <TextField 
          label="Message" 
          variant="outlined" 
          fullWidth 
          multiline 
          rows={4} 
        />
        <Button 
          type="submit" 
          variant="contained" 
          sx={{ backgroundColor: 'gray', ':hover': { backgroundColor: 'darkgray' } }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Heading
