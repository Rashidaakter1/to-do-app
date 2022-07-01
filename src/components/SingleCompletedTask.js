import React from 'react';
import { FaArrowAltCircleRight} from "react-icons/fa";
const SingleCompletedTask = ({task}) => {
    const {newTask}=task
    return (
        <div className='flex' >
            <ul className='flex items-center p-1 ml-6'>
                 <li className='p-1'><FaArrowAltCircleRight/></li>
                 <li className='p-1'>{newTask}</li>
            </ul>
            
        </div>
    );
};

export default SingleCompletedTask;