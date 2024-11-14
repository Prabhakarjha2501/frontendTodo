// context/TaskContext.js
import React, { createContext, useState, useEffect } from 'react';
//import { fetchAllTasks, fetchFilteredTasks, addTask, deleteTask, updateTask } from '../api/api.js';
import { fetchAllTasks,fetchFilteredTasks,addTask,deleteTask,updateTask } from '../api/api';
import { showToast } from '../utils/toastConfig';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);  // Track current page
  const [totalPages, setTotalPages] = useState(1);

  const fetchTasks = async () => { 
    try {
      let response;
      if (filter === 'all') {
        response = await fetchAllTasks(page, 10);
      } else if (filter === 'completed') {
        response = await fetchFilteredTasks(true,page ,10);
      } else if (filter === 'pending') {
        response = await fetchFilteredTasks(false, page, 10);
      }
      setTasks(response.rows || []);
      setTotalPages(Math.ceil(response.totalCount / 10));
    } catch (error) {
      console.error(error);
      showToast('Failed to fetch tasks', 'error'); 
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [filter,page]);


  const addNewTask = async (taskData) => {
    try {
      const response = await addTask(taskData);
      const newTask = response.newTask[0]; 
      // Add new task directly to tasks state if the filter is "all"
      if (filter === 'all') {
        setTasks((prevTasks) => [...prevTasks, newTask]);
      } else {
        // Re-fetch tasks to apply current filter criteria
        fetchTasks();
      }

      showToast('Task added successfully');
    } catch (error) {
      showToast('Failed to add task', 'error');
    }
  };



  const updateExistingTask = async (id, taskData) => {
    try {
      await updateTask(id, taskData);
      showToast('Task updated successfully');
      fetchTasks();
    } catch (error) {
      showToast('Failed to update task', 'error');
    }
  };

  const removeTask = async (id) => {
    try {
      await deleteTask(id);
      showToast('Task deleted successfully');
      fetchTasks();
    } catch (error) {
      showToast('Failed to delete task', 'error');
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, filter, setFilter, addNewTask, updateExistingTask, removeTask,page, setPage, totalPages}}>
      {children}
    </TaskContext.Provider>
  );
};
