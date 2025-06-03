import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Table from "./components/Table"
const App =()=> {
  const [tasks, setTaks] = useState();

  return (
    <>
      <Navbar tasks ={tasks} setTaks={setTaks}/>
      <Table tasks={tasks}/>
      </>



  )
}

export default App
