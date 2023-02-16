import React from 'react';
import ChartC from '../Components/Chart';
import getAsJson from '../placeholderRequest'
import { useState,useEffect } from 'react';

function Chart() {

    const [data, setData] = useState([]);

    if (data.length == 0 ) {
        Promise.all([
                    fetch("https://covid-19.dataflowkit.com/v1/germany"),

                    fetch("https://covid-19.dataflowkit.com/v1/spain"),

                    fetch("https://covid-19.dataflowkit.com/v1/england")

        ]).then(responses => Promise.all(responses.map(r => r.json())))
            .then(responsesAsJson => {
                setData([
                    responsesAsJson[0]["Total Deaths_text"],
                    responsesAsJson[1]["Total Deaths_text"],
                    responsesAsJson[2]["Total Deaths_text"]
                ]);
            });
    }  


    let arcValues =
    {
        description: "Total Cases Death for Covid by Country",
        maxValue: 10000000,
        axisValues: [
            {
                id: 1,
                color: "grey"
            },
            {
                id: 2,
                color: "blue"
            },
            {
                id: 3,
                color: "red"
            }
        ]
    };

    for (let amountOfData = 0; amountOfData < data.length; amountOfData++)
    {
        arcValues.axisValues[amountOfData].value = data[amountOfData].replaceAll(',', '');
    }

    return (
        <div className="ChartPageWrapper">
            <ChartC data={arcValues}></ChartC>
        </div>
    );

}

export default Chart;