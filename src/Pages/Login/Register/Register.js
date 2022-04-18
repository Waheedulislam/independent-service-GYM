import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Button } from 'react-bootstrap';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // navigate
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        console.log(user, 'user');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }


    return (
        <div className='register-form '>
            <h1 className=' text-center'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'ps-2 ' : 'ps-2 text-danger'} htmlFor="terms">Accept Terms and Condition</label>

                <Button
                    disabled={!agree}
                    type="submit" variant="bg-success" className="btn btn-color custom-bg-color mx-auto d-block mt-2 w-50 btn-hight  mt-3"><span className='text-white'><h5>Register</h5></span></Button>
            </form>
            <h6 style={{ paddingTop: '15px' }}>Already have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></h6>
            <SocialLogin></SocialLogin>
        </div>

    );
};

export default Register;