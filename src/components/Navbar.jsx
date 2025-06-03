import React from 'react'
import { useState } from 'react';
import "../styles/navbar.css"
const Navbar = ({tasks, setTasks}) => {

  const [inputText, setInputText] = useState('');
  const [duration, setDuration] = useState('Daily');
  const handleAddTask = () => {
    if (!inputText.trim()) return;

    const newTask = {
      id: (tasks?.length || 0) + 1,
      content: inputText,
      duration: duration
    };
    setTasks([...tasks, newTask]);
    setInputText('');
    setDuration('Daily'); // optional: reset dropdown
  }


  return (
    <div className='main-container'>
      <div className='upper-card'>
        <h1>Make a <strong>better</strong> plan <br />for your life</h1>
        <div className='positioning-content'>
          <p>Whoever you are, whatever you are looking for, we <br /> have the perfect place for you
          </p>

          <select className='duration-select'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Year</option>
          </select>
          <input
            type='text'
            className='classContainer'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder='Task'
          />
          <button className='button-container' onClick={handleAddTask}>Add Task</button>
        </div>
      </div>
      <div className='upper-content'>
        <ul>
          <li className='all-listing'>All</li>
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
          <li>Year</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar