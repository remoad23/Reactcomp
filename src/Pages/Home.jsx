import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="mainPageWrapper">
            <div onClick={(e) => Redirect(e.target)}  className="mainPageContent">
                <Link to="pager">Pager</Link>
            </div>
            <div onClick={(e) => Redirect(e.target)}  className="mainPageContent">
                <Link to="calendar">Calendar</Link>
            </div>
            <div onClick={(e) => Redirect(e.target)}  className="mainPageContent">
                <Link to="formMaker">FormMaker</Link>
            </div>
            <div onClick={(e) => Redirect(e.target)}  className="mainPageContent">
                <Link to="chart">Chart</Link>
            </div>
            <div onClick={(e) => Redirect(e.target)}  className="mainPageContent">
                <Link to="table">Table</Link>
            </div>
            <div onClick={(e) => Redirect(e.target)}  className="mainPageContent">
                <Link to="toolTip">ToolTip</Link>
            </div>
            <div onClick={(e) => Redirect(e.target)}  className="mainPageContent">
                <Link to="modalWindow">ModalWindow</Link>
            </div>
            <div onClick={(e) => Redirect(e.target)}  className="mainPageContent">
                <Link to="fileUploader">FileUploader</Link>
            </div>
        </div>
    );
}

function Redirect(element) {
    if (element.firstElementChild)
        element.firstElementChild.click();
}

export default Home;