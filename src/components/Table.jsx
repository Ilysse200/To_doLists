import React from 'react';
import "../styles/navbar.css";
import { FaEdit, FaTrash } from 'react-icons/fa';

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
        <tbody className='table-styles'>
          {Array.isArray(tasks) && tasks.map((item, index) => (
            <tr key={index} className='table-content'>
              <td className='table data'>{item.id}</td>
              <td className='table data'>{item.content}</td>
              <td className='table data' style={{ display: 'flex', gap: '.6rem' }}>
                <FaEdit style={{ color: 'green', cursor: 'pointer' }} />
                <FaTrash style={{ color: 'red', cursor: 'pointer' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
