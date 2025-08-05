import React, { useState, useEffect } from 'react';

function TaskTimer() {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 mins = 1500 seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      alert('⏰ Time’s up! Take a break.');
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h3>⏳ Task Timer</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{formatTime(timeLeft)}</p>
      <button 
        onClick={() => setIsRunning(!isRunning)} 
        style={{ padding: '8px', marginRight: '10px' }}
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button 
        onClick={() => {
          setIsRunning(false);
          setTimeLeft(1500);
        }} 
        style={{ padding: '8px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default TaskTimer;
