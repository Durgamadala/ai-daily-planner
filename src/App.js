import TaskTimer from './components/TaskTimer';
import DarkModeToggle from './components/DarkModeToggle';
import TaskList from './components/TaskList';
import TaskSuggestions from './components/Tasksuggestions';
import TaskInput from './components/TaskInput';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  return (
    <div style={{ padding: '20px' }}>
    <DarkModeToggle />
    <h1>AI-Powered Daily Planner</h1>
    <TaskInput onAddTask={addTask} />
    <TaskList tasks={tasks} />
    <TaskTimer />
    <TaskSuggestions onSelectSuggestion={(taskTitle) =>
      addTask({ id: Date.now(), title: taskTitle, priority: 'Medium' })
    } />
  </div>
  );
}


export default App;
