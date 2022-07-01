
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Calender = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div className='bg-white '>
            <div className=' h-screen flex items-center justify-center'>
            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}

            />
            </div>
        </div>
    );
};

export default Calender;