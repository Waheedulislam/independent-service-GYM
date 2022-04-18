import React from 'react';
import Not from '../../../img/404.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img width='700' className='img' src={Not} alt="" />
        </div>
    );
};

export default NotFound;