import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const navigate = useNavigate()

    const onSubmit = data => console.log(data);

    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)} >
                        <button onClick={() => navigate("/")} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">Log in</h3>
                        <div className='mt-3 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type="email"
                                placeholder='Enter your email'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("email", { required: true })}
                            />
                            <br />
                             {errors.email && <span className='text-red-700 text-sm'>This field is required</span>}
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
                             {errors.password && <span className='text-red-600 text-sm'>This field is required</span>}
                        </div>
                        <div className='mt-3 flex items-center justify-around'>
                            <button className='btn btn-primary'>Log in</button>
                            <p>Not registered <Link to="/signup" className='underline'>Sign up</Link></p>
                        </div>
                    </form>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>

        </>
    )
}

export default Login