import React from 'react';
import {Link} from 'react-router-dom'
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="NotFound">
            <h1 className="NotFound-title">Oops! Strony nie znaleziono</h1>
            <Link to="/" className="NotFound-link">Wróć co strony głównej</Link>
        </div>
    );
};

export default NotFound;
