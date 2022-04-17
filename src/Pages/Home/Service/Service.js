import React from 'react';

const Service = ({ service }) => {
    const { id, name, img, price } = service;
    return (
        <div className='col-sm-12 g-5 col-md-6 col-lg-4'>
            <div className="card " style={{ width: '20rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5>{name}</h5>
                    <p className="card-text ">Price: {price}</p>
                    <a href="#" className="btn btn-primary">{name}</a>
                </div>
            </div>
        </div>
    );
};

export default Service;