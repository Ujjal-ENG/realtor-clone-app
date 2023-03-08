import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import OAuth from '../components/OAuth';

const ForgotPasword = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <section>
            <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>

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
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out"
                            placeholder="Enter the Email Here"
                            required
                        />

                        {/* account and forgot password section */}

                        <div className="flex justify-between mt-9 items-center">
                            <Link>
                                Don't have an account?{' '}
                                <Link className="text-red-500 font-semibold text-lg" to="/sign-up">
                                    Register
                                </Link>
                            </Link>

                            <Link className="text-lg text-blue-500 font-semibold" to="/sign-in">
                                SignIn Instead!!
                            </Link>
                        </div>

                        {/* sign-in button */}
                        <button type="submit" class="btn bg-blue-600 border-none mt-9 w-full lowercase text-2xl">
                            Send Reset Password
                        </button>

                        <div class="divider font-bold mt-9">OR</div>

                        <OAuth />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgotPasword;
