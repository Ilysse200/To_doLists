import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Table from "./components/Table"
const App =()=> {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Navbar tasks ={tasks} setTasks={setTasks}/>
      <Table tasks={tasks}/>
      </>



  )
}

export default App
