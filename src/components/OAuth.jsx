import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
    const navigate = useNavigate();
    const onGoogleClick = async () => {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();

            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // check for the user

            const docRef = doc(db, 'users', user.uid);

            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timeStamp: serverTimestamp()
                });
            }
            toast.success('Successfully login with the email!!!');
            navigate('/');
        } catch (error) {
            toast.error('Could not authorize with Google');
        }
    };

    return (
        <button type="button" className="btn bg-red-600 border-none mt-9 w-full uppercase text-xl" onClick={onGoogleClick}>
            <FcGoogle className="mx-2 bg-white rounded-full" /> continue with google
        </button>
    );
};

export default OAuth;
