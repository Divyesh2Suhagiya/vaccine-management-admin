import React from 'react';
import './Login.css'
import { useForm } from 'react-hook-form';
import { login } from '../../Services/AuthService';
import { Col, Row } from 'react-bootstrap';

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        login(data);
    };
    return (
        <>
            <div className='row login m-0'>
                <div className='col-11 col-md-8 mx-auto login_section'>
                    <div className='row'>
                        <div className='col login_section_left p-4 d-md-flex d-none'>
                            <div>
                                <h1 className='display-6'>Welcome Back!</h1>
                                <p className='mt-4'>We welcome you at our official website.
                                    Here you can find everything about Ecommerce. Our focus is to make site easy with cost-effective, efficient and robust tech solutions that can make a huge impact.</p>
                            </div>
                        </div>
                        <div className='col p-5 py-2'>
                            <form className='py-3' onSubmit={handleSubmit(onSubmit)}>
                                <h3 className='display-6 mb-5'>Login to your Account</h3>
                                <label className='input_lable'>Username</label>
                                <input type="text" className='input_group w-100 p-2' placeholder='username' {...register("username", { required: true })} />
                                {errors.username && <span className='Error_msg'>Email is required</span>}

                                <label className='input_lable mt-3'>Password</label>
                                <input type="password" className='input_group w-100 p-2' placeholder='123' {...register("password", { required: true })} />
                                {errors.password && <span className='Error_msg'>Password is required</span>}

                                <button className='same_theme_button px-5 py-3 mt-4'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login