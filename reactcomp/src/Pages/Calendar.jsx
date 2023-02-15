import React from 'react';
import { useState } from 'react';

function Calendar() {

    let today = new Date();

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

    let elements = [];

    const [daysInMonth, setDaysInMonth] = useState(new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate());
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    for (let x = 1; x <= 35; x++)
    {
        if (daysInMonth < 35 && x > daysInMonth) {
            elements.push(<div key={x}></div>);
        }
        else {
            elements.push(<div key={x}>{x}</div>);
        }
        
    }


    return (
        <div className="calendarWrapper">
            <div className="calendarBody">
                <div className="calendarHeader">
                       <div onClick={() => goBack()} className="goBackBtnCalendar"></div>
                    
                    <div class="currentDate" >
                        {
                           currentYear  + " " + monthNames[currentMonth]
                        }
                    </div>
                        <div onClick={() => goFoward()} className="goForwardBtnCalendar"></div>
                    
                </div>
                <div className="calendarGrid">
                    {
                        elements
                    }
                </div>
            </div>
        </div>
    );

    function goBack()
    {
        console.log(currentMonth);
  
        if (currentMonth == 0) {
            setCurrentYear(currentYear - 1)
            setCurrentMonth(11)
        }
        else {
            setCurrentMonth(currentMonth - 1)
            setDaysInMonth(new Date(currentYear, currentMonth, 0).getDate())
            console.log(daysInMonth);
        }
    }

    function goFoward()
    {

        console.log(currentMonth);
        console.log(daysInMonth);
        if (currentMonth == 11) {
            setCurrentYear(currentYear + 1)
            setCurrentMonth(0)
        }
        else {
            setCurrentMonth(currentMonth + 1)
            setDaysInMonth(new Date(currentYear, currentMonth, 0).getDate())
            console.log(daysInMonth);
        }
    }
}

export default Calendar;