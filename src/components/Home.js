
import { useQuery } from 'react-query'
import { useForm } from "react-hook-form";
import Task from './Task';

const Home = () => {
    const { register, handleSubmit, reset } = useForm();



    const onSubmit = data => {
       
        
        fetch('http://localhost:5000/tasks', {
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
        reset()
       

    }

    const { isLoading, data:tasks, refetch } = useQuery('tasks', () =>
        fetch('http://localhost:5000/tasks').then(res =>
            res.json()

        )

    )
   refetch()

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            refetch()
        }


    }
    

    if (isLoading) return 'Loading...'



    return (
        <div className='z-0 h-screen'>
            <h1 className=' border-b-4 border-violet-900 text-white text-2xl bg-teal-700 p-6 mb-6 font-semibold'>What's The Task For Today !!! </h1>
            <form onKeyDown={handleKeyDown} onSubmit={handleSubmit(onSubmit)}>

               <div className=' ml-2 '>
               <input className='rounded  md:w-1/2 md:m-0 w-3/4 md:p-4 p-2 capitalize' placeholder='Add your Task' {...register("newTask", { required: true })} />
               </div>

            </form>
            <div>
                {
                    tasks.map(task => <Task
                        task={task}
                        key={task._id}
                        refetch={refetch}
                       
                    ></Task>)
                }
            </div>
        </div>
    );
};

export default Home;