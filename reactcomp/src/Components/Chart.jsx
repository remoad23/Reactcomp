import React from 'react';


function Chart(data) {



    let elements = [];

    for (let line of data.data.axisValues) {

        let heightPercentage = ((line.value * 100) / data.data.maxValue) + "%";

        let lineCss = { height: heightPercentage, width: '40px',backgroundColor: line.color };

        elements.push(<div key={line.id} className="XAxisLine" style={lineCss}></div>);
    }

    return (
        <div className="chartWrapper">
            <div className="chartYAxis">
                <div className="chartYAxisNumbers">
                    <p>{data.data.maxValue}</p>
                    <p>0</p>
                </div>
            </div>
            <div className="chartXAxis">
                <div className="chartXAxisGraph">
                    {
                        elements
                    }
                </div>
                <div className="chartXAxisLine">
                    {data.data.description }
                </div>
            </div>
        </div>
    );

}

export default Chart;