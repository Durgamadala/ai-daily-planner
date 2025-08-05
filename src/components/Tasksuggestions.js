import React, { useEffect, useState } from 'react';

function TaskSuggestions({ onSelectSuggestion }) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const hour = new Date().getHours();
    let timeOfDay;

    if (hour < 12) timeOfDay = 'morning';
    else if (hour < 17) timeOfDay = 'afternoon';
    else timeOfDay = 'evening';

    const taskMap = {
      morning: ['Plan your day', 'Exercise', 'Check emails'],
      afternoon: ['Complete main task', 'Attend meeting', 'Quick review'],
      evening: ['Review goals', 'Write summary', 'Relax or meditate'],
    };

    setSuggestions(taskMap[timeOfDay]);
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>AI Task Suggestions</h3>
      <ul>
        {suggestions.map((task, index) => (
          <li key={index} style={{ margin: '5px 0' }}>
            {task} <button onClick={() => onSelectSuggestion(task)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskSuggestions;
