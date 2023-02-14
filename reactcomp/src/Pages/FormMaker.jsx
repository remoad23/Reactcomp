import React from 'react';
import FormMakerC from '../Components/FormMaker'
import Row from '../Components/FormMaker/FMRow'

function FormMaker() {
    return (
        <div className="FormMakerPageWrapper">
            <FormMakerC title={'FormMaker sample'}>
                <Row ph='Test' ></Row>
                <Row ph={'Test'} ></Row>
                <Row ph={'Test'} ></Row>
            </FormMakerC>
        </div>

    );
}

export default FormMaker;