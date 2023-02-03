import './App.css';

import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">

                <div className="mainPageBody">

                    <div className="mainPageContent">
                        <Link to="Pages/Pager">Pager</Link>
                    </div>
                    <div className="mainPageContent">
                        <Link to="Pages/Calendar">Calendar</Link>
                    </div>
                    <div className="mainPageContent">
                        <Link to="Pages/FormMaker">FormMaker</Link>
                    </div>
                    <div className="mainPageContent">
                        <Link to="Pages/Chart">Chart</Link>
                    </div>

                    <div className="mainPageContent">
                        <Link to="Pages/Table">Table</Link>
                    </div>
                    <div className="mainPageContent">
                        <Link to="Pages/ToolTip">ToolTip</Link>
                    </div>
                    <div className="mainPageContent">
                        <Link to="Pages/ModalWindow">ModalWindow</Link>
                    </div>
                    <div className="mainPageContent">
                        <Link to="Pages/FileUploader">FileUploader</Link>
                    </div>

                </div>


            </div >
            </Router>
    );
}

                export default App;
