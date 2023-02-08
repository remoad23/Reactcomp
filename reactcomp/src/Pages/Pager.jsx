import React from 'react';
import PagerC from '../Components/Pager'

let elements = [
    <h1>1</h1>,
    <h2>2</h2>,
    <h3>3</h3>,
    <h1>4</h1>,
    <h1>5</h1>,
    <h1>6</h1>,
    <h1>7</h1>,
    <h1>8</h1>,
    <h1>9</h1>,
    <h1>10</h1>
];

function Pager() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw"}} >
            <PagerC elements={elements}></PagerC>
        </div>    
  );
}

export default Pager;