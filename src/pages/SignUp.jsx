import React, { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import OAuth from '../components/OAuth';

const SignUp = () => {
    const [showPass, setPass] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = formData;

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    };

    const chnageShowpass = () => {
        setPass((prevState) => !prevState);
    };

    return (
        <section>
            <h1 className="text-3xl text-center mt-6 font-bold">SignUp</h1>

            {/* container div */}

            <div className="flex m-10 justify-center md:max-w-7xl w-full items-center md:items-start mx-auto flex-col md:flex-row gap-6">
                {/* left side */}
                <div className="w-3/4  md:w-1/2">
                    <img
                        src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
                        alt="key"
                        className="rounded-lg"
                    />
                </div>

                {/* right side */}
                <div className="w-3/4 md:w-1/2 ">
                    <form action="" className="space-y-9">
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out"
                            placeholder="Enter Your FullName Here"
                            required
                        />
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out"
                            placeholder="Enter the Email Here"
                            required
                        />

                        <div className="relative">
                            <input
                                type={showPass ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out"
                                placeholder="Enter the Password Here"
                                required
                            />

                            <div className="absolute top-3 right-8 text-2xl cursor-pointer" onClick={chnageShowpass}>
                                {showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
                            </div>

                            {/* account and forgot password section */}

                            <div className="flex justify-between mt-9 items-center">
                                <p>
                                    Have an Account?{' '}
                                    <Link className="text-red-500 font-semibold text-lg" to="/sign-in">
                                        Sign In
                                    </Link>
                                </p>

                                <Link className="text-lg text-blue-500 font-semibold" to="/forgot-password">
                                    Forgot password?
                                </Link>
                            </div>

                            {/* sign-in button */}
                            <button type="submit" class="btn bg-blue-600 border-none mt-9 w-full lowercase text-2xl">
                                Sign Up
                            </button>

                            <div class="divider font-bold mt-9">OR</div>

                            <OAuth />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
