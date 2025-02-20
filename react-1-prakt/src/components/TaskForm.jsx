import React, { useState } from 'react';
function TaskForm({onAddTask}){

    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (taskText.trim() !== '') {
        onAddTask(taskText);
        setTaskText('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Iveskite nauja uzdavini"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="submit">Prideti uzdadvini</button>
      </form>
    );
  }

export default TaskForm;