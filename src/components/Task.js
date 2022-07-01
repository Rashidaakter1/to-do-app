import React, { useState } from 'react';

const Task = ({task}) => {
    const {newTask,_id}=task
    const [radioOption, setradioOption]= useState(false)


    const handle=(id)=>{
        console.log(id);
    }
    const handleChecked=(e)=>{

       setradioOption( e?.target?.checked)
       
      
       if(radioOption === true){
        console.log('ok');
        // fetch('http://localhost:5000/completedTask', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);

        //     })
       }
       console.log(radioOption );
    }
    
    return (
        <div className='m-2' >
            <button onClick={()=>handle(_id)}>  <input  onChange={handleChecked} className='' type="checkbox" name="check" id="" /></button>
          
            <h1 className='inline p-2'>this is {newTask}</h1>

        </div>
    );
};

export default Task;