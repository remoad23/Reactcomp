import React from 'react';

function FormMaker({ children, title } ) {
    return (
        <div className="FormMaker">
            <h1>
                {
                    title
                }
            </h1>
            {
                children
            }
            <button className="FormMakerSubmit" type="submit">Send</button>
        </div>
    );
}

export default FormMaker;