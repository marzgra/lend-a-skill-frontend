import React from 'react';
import './InterestList.css';

const InterestList = (props) => {

    return (
        <div className="list-wraper">
            <h5> {props.title}</h5>
            <ul className="list">
                {props.list}
            </ul>
        </div>
    );
};
export default InterestList;