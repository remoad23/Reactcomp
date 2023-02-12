import React from 'react';
import PagerC from '../Components/Pager'

let elements = [
    <h1>First Page</h1>,
    <h2>Second Page</h2>,
    <h3>Third Page</h3>,
    <h1>Fourth Page</h1>,
    <h1>Fifth Page</h1>,
    <h1>Sixth Page</h1>,
    <h1>Seventh Page</h1>,
    <h1>Eight Page</h1>,
    <h1>9th Page</h1>,
    <h1>10th Page</h1>
];

function Pager() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw"}} >
            <PagerC elements={elements}></PagerC>
        </div>    
  );
}

export default Pager;