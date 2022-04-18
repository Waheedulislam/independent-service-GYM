import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, price } = service;
    return (
        <div className='col-sm-12 g-5 col-md-6 col-lg-4'>
            <div className="card " style={{ width: '20rem' }}>
                <img src={img} className="card-img-top w-80" alt="..." />
                <div className="card-body text-center" >
                    <h3 >{name}</h3>
                    <h5 className="card-text text-center mt-4">Price: {price}</h5>
                    <Button variant="primary" className="btn btn-color custom-bg-color mx-auto d-block mt-2">{name}</Button>
                </div>
            </div>
        </div>
    );
};

export default Service;