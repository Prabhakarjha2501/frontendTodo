// context/TaskContext.js
import React, { createContext, useState, useEffect } from 'react';
//import { fetchAllTasks, fetchFilteredTasks, addTask, deleteTask, updateTask } from '../api/api.js';
import { fetchAllTasks,fetchFilteredTasks,addTask,deleteTask,updateTask } from '../api/api';
import { showToast } from '../utils/toastConfig';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  //const [task, setTask] = useState([]);

  const fetchTasks = async () => {
    try {
      let response;
      if (filter === 'all') {
        response = await fetchAllTasks();
      } else if (filter === 'completed') {
        response = await fetchFilteredTasks(true);
      } else if (filter === 'pending') {
        response = await fetchFilteredTasks(false);
      }
      setTasks(response.rows || []);
    } catch (error) {
      console.error(error);
      showToast('Failed to fetch tasks', 'error');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const addNewTask = async (taskData) => {
    try {
      const newTask=await addTask(taskData);
      setTasks([...tasks, newTask]);
      showToast('Task added successfully');
      fetchTasks();
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
    <TaskContext.Provider value={{ tasks, filter, setFilter, addNewTask, updateExistingTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
