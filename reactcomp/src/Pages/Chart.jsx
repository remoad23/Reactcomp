import React from 'react';
import ChartC from '../Components/Chart';

function Chart() {

    let arcValues =
    {
        description: "This is test description",
        maxValue: 200,
        axisValues: [
            {
                value: 50,
                color: "grey"
            },
            {
                value: 25,
                color: "blue"
            },
            {
                value: 75,
                color: "red"
            },
            {
                value: 150,
                color: "grey"
            }
            , {
                value: 200,
                color: "grey"
            },
        ]
    };

    return (
        <div className="ChartPageWrapper">
            <ChartC data={arcValues}></ChartC>
        </div>
    );
}

export default Chart;