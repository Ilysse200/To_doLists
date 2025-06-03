import React from 'react'
import "../styles/navbar.css"
import { arrayListings } from './listings'
const Table = ({tasks}) => {
  return (
     <div className='main-Tablecontent'>
        <table className='tableStyles'>
            <tbody className='table-styles'>
                {tasks.map((item, index)=>(

                    <tr key={index} className='table-content'>
                        <td className='table data'>{item.id}</td>
                        <td className='table data'>{item.content}</td>
                    </tr>

                ))}
            </tbody>
        </table>

    </div>
  )
}

export default Table