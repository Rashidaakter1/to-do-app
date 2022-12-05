import React, { useRef } from 'react';

const ToDoTask = ({ task, index ,refetch}) => {
    const { newTask, _id } = task
    const modifiedData = useRef('')

    const handleEdit = (id) => {
        const modifiedValue = modifiedData.current.value

        const uri = `https://to-do-app-api.onrender.com/tasks/${id}`
        console.log(modifiedValue, uri);
        const data = { newTask: modifiedValue }

        fetch(uri, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                refetch()
            })
        
        
    }
    return (

        <tr >
            <td className='border border-slate-700 p-2'>{index + 1}</td>
            <td className='border border-slate-700 p-2'>{newTask}</td>
            <td className='border border-slate-700 p-2'>  <input  ref={modifiedData} className='border p-1 capitalize' placeholder='Want to Modify' type="text" name='modify' /> </td>
            <td className='border border-slate-700 p-2'><button onClick={() => handleEdit(_id)} className='m-2 bg-green-200 rounded hover:bg-green-900 px-2  hover:text-white'>Edit</button></td>
        </tr>

    );
};

export default ToDoTask;