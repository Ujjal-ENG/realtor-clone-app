import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';

const Profile = () => {
    const auth = getAuth();
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    });
    const { name, email } = formData;

    return (
        <>
            <section>
                {/* Section Title */}
                <h1
                    className="text-3xl text-center font-bold 
             py-5">
                    Profile Page
                </h1>

                <div className="w-full md:w-1/2 mt-6 px-3 mx-auto">
                    <form className="space-y-8">
                        {/* name input */}
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out px-4 text-xl text-gray-700"
                            placeholder="Enter the Name Here"
                            value={name}
                            disabled
                        />

                        {/* email input */}
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out px-4 text-xl text-gray-700"
                            placeholder="Enter the Email Here"
                            value={email}
                            disabled
                        />

                        {/* Edit and Signout BUtton */}

                        <div className="flex justify-between items-center ">
                            <p className="text-xl font-semibold">
                                Do you want to change your name? <span className="text-red-600 hover:text-red-900 font-bold cursor-pointer transition ease-in-out">Edit</span>
                            </p>
                            <p className=" text-xl font-semibold text-blue-600 cursor-pointer hover:font-bold hover:text-blue-800 transition ease-in-out">Sign Out</p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Profile;
