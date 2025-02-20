import TaskItem from "./TaskItem"
import React, { useState } from 'react';
import TaskForm from "./TaskForm";
function TaskList(){
    const [tasks, setTasks] = useState([]);

    
    const addTask = (text) => {
      const newTask = {
        id: Date.now(), 
        text,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    };
  
    
    const toggleTask = (id) => {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    };
  
    
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };
  
    return (
      <div>
        <h1>Uzdaviniu sarasas</h1>
        <TaskForm onAddTask={addTask} />
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </div>
    );
}

export default TaskList