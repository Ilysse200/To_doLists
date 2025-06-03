import React from 'react';
import "../styles/navbar.css";
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { useState } from 'react';

const Table = ({ tasks, onDelete, onEdit, filterCategory }) => {

  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const filteredTasks =
    filterCategory === "All"
      ? tasks
      : tasks.filter((task) => task.duration === filterCategory);

  return (
    <div className='main-Tablecontent'>
      <table className='tableStyles'>
        <thead>
          <tr>
            {/* <th>ID</th>
            <th>Task</th>
            <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id} className='table-content'>
              <td>{task.id}</td>
              <td>
                {editingId === task.id ? (
                  <input
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                ) : (
                  task.content
                )}
              </td>
              <td style={{ display: 'flex', gap: '10px' }}>
                {editingId === task.id ? (
                  <FaSave
                    style={{ cursor: 'pointer', color: 'blue' }}
                    onClick={() => {
                      onEdit(task.id, editedText);
                      setEditingId(null);
                    }}
                  />
                ) : (
                  <FaEdit
                    style={{ cursor: 'pointer', color: 'green' }}
                    onClick={() => {
                      setEditingId(task.id);
                      setEditedText(task.content);
                    }}
                  />
                )}

                <FaTrash
                  style={{ cursor: 'pointer', color: 'red' }}
                  onClick={() => onDelete(task.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
