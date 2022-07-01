import React from 'react';

const SingleCompletedTask = ({task}) => {
    const {newTask}=task
    return (
        <div>
          <h1>{newTask}</h1>  
        </div>
    );
};

export default SingleCompletedTask;