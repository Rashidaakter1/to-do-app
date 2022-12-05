import React from 'react';
import { useQuery } from 'react-query'
import ToDoTask from './ToDoTask';



const ToDoList = () => {
    const { isLoading, data: tasks, refetch } = useQuery('tasks', () =>
        fetch('https://to-do-app-api.onrender.com/tasks').then(res =>
            res.json()

        )

    )
    if (isLoading) return 'Loading...'
    console.log(tasks);
    return (
        <div className='bg-red-100 h-screen' >

            <h1 className=' border-b-4 border-violet-900 text-white text-2xl bg-teal-700 p-6 mb-6 font-semibold'>To do List </h1>

        <div className='md:ml-12 m-0'>
            
        <table>
                <tr>
                    <th className='border bg-slate-300 p-2 m-2'>No</th>
                    <th className='border bg-slate-300 p-2'>Task</th>
                    <th className='border bg-slate-300 p-2'></th>
                    <th className='border bg-slate-300 p-2'></th>
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