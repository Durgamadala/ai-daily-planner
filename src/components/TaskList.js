import React, { useState } from 'react';

function TaskList({ tasks }) {
  const [completedTasks, setCompletedTasks] = useState([]);

  const toggleComplete = (id) => {
    setCompletedTasks(prev =>
      prev.includes(id) ? prev.filter(taskId => taskId !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li 
            key={task.id} 
            style={{ 
              marginBottom: '10px', 
              textDecoration: completedTasks.includes(task.id) ? 'line-through' : 'none',
              opacity: completedTasks.includes(task.id) ? 0.5 : 1 
            }}
          >
            <input 
              type="checkbox" 
              checked={completedTasks.includes(task.id)} 
              onChange={() => toggleComplete(task.id)} 
              style={{ marginRight: '10px' }}
            />
            <strong>{task.title}</strong> 
            <span style={{ 
              marginLeft: '10px', 
              color: task.priority === 'High' ? 'red' : task.priority === 'Medium' ? 'orange' : 'green' 
            }}>
              {task.priority} Priority
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
