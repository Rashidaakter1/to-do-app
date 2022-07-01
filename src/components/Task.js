import React, { useState } from 'react';

const Task = ({task,refetch}) => {
    const {newTask,_id}=task
    const [radioOption, setradioOption]= useState(false)


   
    const handleChecked=(task)=>{
    //   console.log(task)
       
      const data={
        _id:task._id,
        newTask:task.newTask}
        console.log(data)
    
        const uri = `http://localhost:5000/completedTask`
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
                

            })

            fetch(`http://localhost:5000/tasks/${task._id}`, {
                method: 'DELETE',
              }).then(res=>res.json()).then(result=>{
                console.log('Success:', result)
              })
              
            refetch()
       }
       
       

       
    
    
    return (
        <div className='m-2' >
            
           <input onChange={()=>handleChecked(task)} type="radio" name="clicked" id="" />
            <h1 className='inline p-2'>this is {newTask}</h1>

        </div>
    );
};

export default Task;