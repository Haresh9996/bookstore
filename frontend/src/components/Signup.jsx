import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";

import Login from './Login'

const Signup = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="">
                    <div className="modal-box w-fit">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => navigate("/")}>✕</button>
                            <h3 className="font-bold text-lg">Sign up</h3>
                            <div className='mt-3 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="text"
                                    placeholder='Enter your name'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("name", { required: true })}
                                />
                                <br />
                                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}

                            </div>
                            <div className='mt-3 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email"
                                    placeholder='Enter your email'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

                            </div>
                            <div className='mt-3 space-y-2'>
                                <span>Password</span>
                                <br />
                                <input type="text"
                                    placeholder='Enter your password'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            <div className='mt-3 flex items-center justify-around'>
                                <button className='btn btn-primary'>Sign up</button>
                                <p>Allready have account <button onClick={() => document.getElementById('my_modal_3').showModal()} className='underline'>Log in</button></p>
                                <Login />
                            </div>
                        </form>
                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup