import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // resetPassword
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );


    if (loading || sending) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement =
            <h6 className='text-danger'>Error: {error?.message}</h6>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }
    const navigateRegister = event => {
        navigate('/register')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Send email');
        }
        else {
            toast(('please enter your email adders'))
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h1 className=' text-center'>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email " required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button type="submit" variant="" className="btn btn-color  mx-auto d-block mt-2 w-50 btn-hight custom-bg-color text-white"><h5>Login</h5></Button>
            </Form>
            {
                errorElement
            }
            <h6 style={{ paddingTop: '15px' }}>New to Body Flex Gym? <Link to='/register' className='text-danger text-decoration-none' onClick={navigateRegister}>Please Register</Link></h6>

            <h6 style={{ paddingTop: '15px' }}>Forget password?

                <button className='btn btn-link pt-3 ps-2 text-danger text-decoration-none' onClick={resetPassword}><h6>Reset Password</h6></button>
            </h6>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div >
    );
};

export default Login;