import React from 'react';
import { useQuery } from 'react-query'
import ToDoTask from './ToDoTask';



const ToDoList = () => {
    const { isLoading, data: tasks, refetch } = useQuery('tasks', () =>
        fetch('http://localhost:5000/tasks').then(res =>
            res.json()

        )

    )
    if (isLoading) return 'Loading...'
    console.log(tasks);
    return (
        <div className='bg-white' >

            <h1 className='border bg-teal-600 p-6 mb-6 font-semibold'>To do List </h1>

        <div className='ml-12'>
            
        <table>
                <tr>
                    <th>No</th>
                    <th>Task</th>
                    <th></th>
                    <th></th>
                </tr>
                {
                    tasks.map((task, index) => <ToDoTask
                        index={index}
                        task={task}
                        key={task._id}
                        refetch={refetch}
                    ></ToDoTask>)
                }

            </table>

        </div>


        </div>
    );
};

export default ToDoList;