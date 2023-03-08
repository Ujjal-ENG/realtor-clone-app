import React from 'react';

import { FcGoogle } from 'react-icons/fc';
const OAuth = () => {
    return (
        <button type="submit" class="btn bg-red-600 border-none mt-9 w-full uppercase text-xl">
            <FcGoogle className="mx-2" /> continue with google
        </button>
    );
};

export default OAuth;
