import React from 'react';

function Calendar() {

    let today = new Date();

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = weekday[today.getDay()];

    let elements = [];

    for (let x = 1; x <= 31; x++)
    {
        elements.push(<div>{x}</div>);
    }

    // column of first row to start at (weekday where month begins)
    let StartAtColumn = 1;

    return (
        <div className="calendarWrapper">
            <div className="calendarBody">
                <div className="calendarHeader">
                    {
                        today.getFullYear() + " " +  today.getMonth()
                    }
                </div>
                <div className="calendarGrid">
                    {
                        elements
                    }
                </div>
            </div>
        </div>
  );
}

export default Calendar;