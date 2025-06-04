import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Table from "./components/Table"
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All");

  const handleDelete = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  };

  const handleEdit = (id, updatedContent) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, content: updatedContent } : task
    );
    setTasks(updated);
  };

  return (
    <>
      <div className="black">
        <Navbar tasks={tasks}
          setTasks={setTasks}
          setFilterCategory={setFilterCategory}
        />
        <Table tasks={tasks}
          onDelete={handleDelete}
          onEdit={handleEdit}
          filterCategory={filterCategory}

        />
      </div>
    </>



  )
}

export default App
