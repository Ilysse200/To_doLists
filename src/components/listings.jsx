import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // npm install react-icons
import '../styles/navbar.css'; // optional

const initialListings = [
  {
    id: 1, content: 'Learn react', editIcon: <FaEdit style={{ color: 'green' }} />,
    deleteIcon: <FaTrash style={{ color: 'red' }} />
  },
  {
    id: 2, content: 'Build components', editIcon: <FaEdit style={{ color: 'green' }} />,
    deleteIcon: <FaTrash style={{ color: 'red' }} />
  },
  {
    id: 3, content: 'Manage state', editIcon: <FaEdit style={{ color: 'green' }} />,
    deleteIcon: <FaTrash style={{ color: 'red' }} />
  },
  {
    id: 4, content: 'Use hooks', editIcon: <FaEdit style={{ color: 'green' }} />,
    deleteIcon: <FaTrash style={{ color: 'red' }} />
  },
  {
    id: 5, content: 'Deploy app', editIcon: <FaEdit style={{ color: 'green' }} />,
    deleteIcon: <FaTrash style={{ color: 'red' }} />
  }
];

const Listings = () => {
  const [listings] = useState(initialListings);

  return (
    <div className='main-Tablecontent'>
      <table className='tableStyles'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((item) => (
            <tr key={item.id} className='table-content'>
              <td>{item.id}</td>
              <td>{item.content}</td>
              <td>{item.editIcon}</td>
              <td>{item.deleteIcon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listings;
