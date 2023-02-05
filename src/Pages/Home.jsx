import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <div className="mainPageWrapper">
            <div className="mainPageContent">
                <Link to="pager">Pager</Link>
            </div>
            <div className="mainPageContent">
                <Link to="calendar">Calendar</Link>
            </div>
            <div className="mainPageContent">
                <Link to="formMaker">FormMaker</Link>
            </div>
            <div className="mainPageContent">
                <Link to="chart">Chart</Link>
            </div>
            <div className="mainPageContent">
                <Link to="table">Table</Link>
            </div>
            <div className="mainPageContent">
                <Link to="toolTip">ToolTip</Link>
            </div>
            <div className="mainPageContent">
                <Link to="modalWindow">ModalWindow</Link>
            </div>
            <div className="mainPageContent">
                <Link to="fileUploader">FileUploader</Link>
            </div>
        </div>
    );
}

export default Home;