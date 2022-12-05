import React from 'react';
import { useQuery } from 'react-query'
import SingleCompletedTask from './SingleCompletedTask';

const CompletedTask = () => {
    const { isLoading, data: completedTask, refetch } = useQuery('completedTask', () =>
        fetch('https://to-do-app-api.onrender.com/completedTask').then(res =>
            res.json()

        )

    )
   
    return (
        <div className='bg-red-100 '>
            <h1 className=' border-b-4 border-violet-900 text-white text-2xl bg-teal-700 p-6 mb-6 font-semibold'>Completed Task</h1>
            

        
            {
                completedTask?.map((task)=><SingleCompletedTask 
                task={task}
                key={task._id}
              
                ></SingleCompletedTask>)
            }
        </div>
    );
};

export default CompletedTask;