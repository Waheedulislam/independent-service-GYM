import React from 'react';
import { Button } from 'react-bootstrap';
import './SocialLogin.css'
import Google from '../../../img/GoogLogo.png'
import Github from '../../../img/GitHub1.png'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error || error1) {
        errorElement =
            < div >
                <h6 className='text-danger'>Error: {error?.message} {error1?.message}</h6>
            </div >
    }

    if (user || user1) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px', }} className='left-div'></div>
                <p className='m-2 p-2 p-style'>or</p>
                <div style={{ height: '2px' }} className='right-div'></div>
            </div>
            {
                errorElement
            }
            <div style={{ marginBottom: '100px', marginTop: '0' }}>
                <Button variant=""
                    onClick={() => signInWithGoogle()}
                    className="btn-hight btn custom-bg-color btn-color  mx-auto d-block mt-2 w-50 ">
                    <img style={{ width: '30px ', marginRight: '10px' }} src={Google} alt="" />
                    <span className='span-style text-white'>Google Sign In</span>

                </Button>

                <Button variant=""
                    onClick={() => signInWithGithub()}
                    className="btn-hight btn btn-color  mx-auto d-block custom-bg-color mt-2 w-50">
                    <img style={{ width: '45px', marginRight: '10px' }} className='text-color' src={Github} alt="" />
                    <span className='span-style text-white'>GitHub</span>
                </Button>

            </div>
        </div>
    );
};

export default SocialLogin;