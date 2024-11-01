// api/api.js
import axios from 'axios';
//import { API_URL } from '../utils/constant'
const API_URL="http://localhost:5000/api";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch all tasks
export const fetchAllTasks = async () => {
  const response = await axiosInstance.get('/tasks/getAll');
  return response.data;
};

// Fetch tasks based on completion status
export const fetchFilteredTasks = async (completed) => {
  const response = await axiosInstance.get('/tasks/filter', {
    params: { completed },
  });
  return response.data;
};

// Add a new task
export const addTask = async (taskData) => {
  const response = await axiosInstance.post('/tasks/post', taskData);
  return response.data;
};

// Update a task
export const updateTask = async (id, taskData) => {
  const response = await axiosInstance.patch(`/tasks/update/${id}`, taskData);
  return response.data;
};

// Delete a task
export const deleteTask = async (id) => {
  const response = await axiosInstance.delete(`/tasks/deleteById/${id}`);
  return response.data;
};

export default axiosInstance;
