import React, { useState } from 'react';

const Task = ({task,refetch}) => {
    const {newTask,_id}=task
    
    const handleChecked=(task)=>{
    
      const data={
        _id:task._id,
        newTask:task.newTask}
        console.log(data)
    
        const uri = `https://to-do-app-api.onrender.com/completedTask`
        fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // refetch()

            })

            fetch(`https://to-do-app-api.onrender.com/tasks/${task._id}`, {
                method: 'DELETE',
              }).then(res=>res.json()).then(result=>{
                console.log('Success:', result)
              })
              
            // refetch()
       }
       
       

       
    
    
    return (
        <div className='m-2 cursor-pointer' >
            
           <input onChange={()=>handleChecked(task)} type="radio" name="clicked" id="" />
            <h1 className='inline p-2 font-bold md:text-xl cursor-pointer text-indigo-900 hover:text-cyan-900'> {newTask}</h1>

        </div>
    );
};

export default Task;