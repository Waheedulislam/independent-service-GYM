import React from 'react';
import Services from '../Services/Services';

const services = [
    { id: 1, name: 'one', price: 100, description: '', img: '' }
]

const Home = () => {
    return (
        <div>
            <Services></Services>
        </div>
    );
};

export default Home;