import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      priority
    };

    onAddTask(newTask);
    setTitle('');
    setPriority('Medium');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={title}
        placeholder="Enter task"
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '8px', width: '200px', marginRight: '10px' }}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button type="submit" style={{ padding: '8px' }}>Add Task</button>
    </form>
  );
}

export default TaskInput;
