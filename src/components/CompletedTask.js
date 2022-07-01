import React from 'react';
import { useQuery } from 'react-query'
import SingleCompletedTask from './SingleCompletedTask';

const CompletedTask = () => {
    const { isLoading, data: completedTask, refetch } = useQuery('completedTask', () =>
        fetch('http://localhost:5000/completedTask').then(res =>
            res.json()

        )

    )
   
    return (
        <div className='bg-white h-screen'>
            <h1 className='border bg-teal-600 p-6 mb-6 font-semibold'>Completed Task</h1>
            <h1 >{completedTask?.length}</h1>

            {
                completedTask?.map(task=><SingleCompletedTask 
                task={task}
                key={task._id}
                ></SingleCompletedTask>)
            }
        </div>
    );
};

export default CompletedTask;