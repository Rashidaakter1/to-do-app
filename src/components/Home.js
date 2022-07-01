
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
  

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            refetch()
        }


    }
    

    if (isLoading) return 'Loading...'



    return (
        <div>
            <h1 className='border  bg-teal-600 p-6 mb-6 font-semibold'>What's The Task For Today !!! </h1>
            <form onKeyDown={handleKeyDown} onSubmit={handleSubmit(onSubmit)}>

                <input className='border p-3' placeholder='Add your Task' {...register("newTask", { required: true })} />

            </form>
            <div>
                {
                    tasks.map(task => <Task
                        task={task}
                        key={task._id}
                       
                    ></Task>)
                }
            </div>
        </div>
    );
};

export default Home;