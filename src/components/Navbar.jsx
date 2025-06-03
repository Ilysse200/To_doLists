import React from 'react'
import "../styles/navbar.css"
const Navbar = () => {
  return (
    <div className='main-container'>
      <div className='upper-card'>
        <h1>Make a <str>better</str> plan <br/>for your life</h1>
        <div className='positioning-content'>
        <p>Whoever you are, whatever you are looking for, we <br/> have the perfect place for you
        </p>
        
          <select className='duration-select'>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Year</option>
          </select>
        <p className='classContainer'>Task</p>
        <button className='button-container'>Add Task</button>
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