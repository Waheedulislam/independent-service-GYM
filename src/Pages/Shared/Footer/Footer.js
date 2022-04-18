import React from 'react';

const Footer = () => {
    return (
        <footer className=' mt-5' style={{ background: '#1b2933', height: '65px' }}>
            <p className='text-white font h6 text-center pt-4'><small>Copyright © {(new Date().getFullYear())} bodyflexgym.com</small></p>
        </footer>
    );
};

export default Footer;