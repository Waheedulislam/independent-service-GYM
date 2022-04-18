import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-center'>Welcome to Service Details: {serviceId}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <Button style={{ marginTop: '30px' }} className="  mx-auto   w-20 custom-bg-color text-white"><h5 className='text-decoration-none'>Proceed Checker</h5></Button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;