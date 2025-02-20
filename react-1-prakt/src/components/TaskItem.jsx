import React, { useState } from 'react';
function TaskItem({task, onToggle, onDelete}){
    return (
        <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
          <button onClick={() => onToggle(task.id)}>
            {task.completed ? 'Neatlikta' : 'Atlikta'}
          </button>
          <button onClick={() => onDelete(task.id)}>Ištrinti</button>
        </li>
      );
}

export default TaskItem;