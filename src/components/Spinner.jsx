import React from 'react';
import spinner from '../assets/svg/spinner.svg';
const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black bg-opacity-30">
            <div>
                <img src={spinner} alt="loading" className="h-24" />
            </div>
        </div>
    );
};

export default Spinner;
