import { getAuth, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../firebase';

import { FcHome } from 'react-icons/fc';

const Profile = () => {
    const auth = getAuth();
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    });
    const [changeDetail, setChangeDetail] = useState(false);
    const { name, email } = formData;
    const navigate = useNavigate();
    const onLogout = () => {
        auth.signOut();
        navigate('/');
        toast.success('You are Successfully Log out!!');
    };
    const onChange = (e) => {
        e.preventDefault();
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    };

    const onSubmit = async () => {
        try {
            if (auth.currentUser.displayName !== name) {
                // update display name in firebase auth
                await updateProfile(auth.currentUser, {
                    displayName: name
                });

                // update name in the firestore
                const docRef = doc(db, 'users', auth.currentUser.uid);
                await updateDoc(docRef, {
                    name
                });
                toast.success('Profile Details updated!!');
            }
        } catch (error) {
            toast.error('Could not update the profile details!!');
        }
    };
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
                            onChange={onChange}
                            disabled={!changeDetail}
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
                                Do you want to change your name?{' '}
                                <span
                                    className="text-red-600 hover:text-red-900 font-bold cursor-pointer transition ease-in-out"
                                    onClick={() => {
                                        changeDetail && onSubmit();
                                        setChangeDetail((prevState) => !prevState);
                                    }}>
                                    {changeDetail ? 'Apply Change' : 'Edit'}
                                </span>
                            </p>
                            <p className=" text-xl font-semibold text-blue-600 cursor-pointer hover:font-bold hover:text-blue-800 transition ease-in-out" onClick={onLogout}>
                                Sign Out
                            </p>
                        </div>
                    </form>

                    <button className="btn w-full mt-6 bg-blue-600 border-none">
                        <Link to="/create-listing" className=" flex justify-center items-center text-2xl gap-2 ">
                            <FcHome className="bg-red-200 rounded-full text-3xl p-1" />
                            Sell or Rent your Home
                        </Link>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Profile;
