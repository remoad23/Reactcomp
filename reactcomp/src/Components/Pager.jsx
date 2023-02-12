import React from 'react';
import { useState } from 'react';

function Pager({ elements = null }) {

    let pages = [];

    const [currentPagination, setPagination] = useState(0);

    pages = elements;

    let paginationNumbers = [];

    let rightLimit = RightLimitPagination(currentPagination);
    let leftLimit = LeftLimitPagination(currentPagination);
    console.log(rightLimit, leftLimit);

    for (let x = leftLimit; x < rightLimit; x++)
    {
        paginationNumbers.push(
            <div key={x} onClick={() => GoNext(x)} className="paginationNumberBlock">
                <p>{x}</p>
            </div>
            )
        
    }


    return (
        <div className="pager" >
            <div className="currentPaginationElement">
                {
                    pages[currentPagination]
                }
            </div>
            <div className="paginationWrapper">
                {
                    paginationNumbers
                }
            </div>
        </div>
    );

    function GoNext(pagination) {
        setPagination(pagination)
    }

    // returns last lowest index in pages that is not null
    function LeftLimitPagination(pagination) {
        for (let x = pagination; x > pagination - 5; x--) {
            if (!pages[x] || x < 0) {
                return x + 1;
            }
        }
        return pagination - 5
    }

    // returns last highest index in pages that is not null 
    function RightLimitPagination(pagination) {
        for (let x = pagination;x < pagination + 5; x++)
        {
            if (!pages[x]) {
                return x - 1;
            }
        }
        return pagination + 5
    }
}


export default Pager;