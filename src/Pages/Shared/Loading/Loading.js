import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 d-flex pt-10px justify-content-center align-items-center' style={{ height: '300px' }}>
            <Spinner animation="border" variant="secondary" />
        </div>
    );
};

export default Loading;