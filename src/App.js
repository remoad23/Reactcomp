import './App.css';
import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import Pager from "./Pages/Pager"
import Table from "./Pages/Table"
import ToolTip from "./Pages/ToolTip"
import FormMaker from "./Pages/FormMaker"
import FileUploader from "./Pages/FileUploader"
import Chart from "./Pages/Chart"
import Calendar from "./Pages/Calendar"
import ModalWindow from "./Pages/ModalWindow"

function App() {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="pager" element={<Pager />} />
                    <Route path="table" element={<Table />} />
                    <Route path="tooltip" element={<ToolTip />} />
                    <Route path="formmaker" element={<FormMaker />} />
                    <Route path="fileuploader" element={<FileUploader />} />
                    <Route path="chart" element={<Chart />} />
                    <Route path="calendar" element={<Calendar />} />
                    <Route path="modalwindow" element={<ModalWindow />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
