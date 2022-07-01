import React, { useRef } from 'react';

const ToDoTask = ({ task, index ,refetch}) => {
    const { newTask, _id } = task
    const modifiedData = useRef('')

    const handleEdit = (id) => {
        const modifiedValue = modifiedData.current.value

        const uri = `http://localhost:5000/tasks/${id}`
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
            <td>{index + 1}</td>
            <td>{newTask}</td>
            <td>
                <input  ref={modifiedData} className='border' placeholder='Want to Modify' type="text" name='modify' />
            </td>
            <td><button onClick={() => handleEdit(_id)} className='m-2 rounded outline-double px-1 text-lime-900 hover:text-red-300'>Edit</button></td>
        </tr>

    );
};

export default ToDoTask;