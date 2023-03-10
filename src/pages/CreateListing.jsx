import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

const CreateListing = () => {
    const [geoLoactionEnabled, setGeoLoactionEnabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        type: 'rent',
        name: '',
        bedrooms: 0,
        bathrooms: 0,
        address: '',
        description: '',
        parking: 'yes',
        furnished: 'yes',
        offer: 'no',
        regularPrice: 0,
        discountedPrice: 0,
        latitude: 0,
        longitude: 0
    });
    const { type, name, bedrooms, bathrooms, address, description, parking, offer, furnished, regularPrice, discountedPrice, latitude, longitude } = formData;
    const onChange = (e) => {
        e.preventDefault();
        if (e.target.files) {
            setFormData((prevState) => ({
                ...prevState,
                images: e.target.files
            }));
        }
        if (!e.target.files) {
            setFormData((prevState) => ({
                ...prevState,
                [e.target.id]: e.target.value
            }));
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(false);
        if (discountedPrice >= regularPrice) {
            setLoading(false);
            toast.error('Discounted Price needs to be less than regular price');
        }
        return;
    };
    if (loading) {
        return <Spinner />;
    }
    return (
        <main className="max-w-md px-2 mx-auto">
            <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>

            <form onSubmit={onSubmit}>
                <p className="text-lg mt-6 font-semibold">Sell / Rent</p>

                <div className="flex justify-between gap-4 mt-4 items-center">
                    <button className={`btn w-1/2 ${type === 'sell' ? 'btn' : 'bg-white text-black border-none'}`} id="type" value="sell" onClick={onChange}>
                        Sell
                    </button>
                    <button className={`btn w-1/2 ${type === 'rent' ? 'btn' : 'bg-white text-black border-none'}`} onClick={onChange} id="type" value="rent">
                        Rent
                    </button>
                </div>

                {/* Name */}
                <p className="text-lg mt-6 font-semibold">Name</p>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={onChange}
                    className="w-full p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out px-4 text-xl text-gray-700 text-center"
                    min="6"
                    max="50"
                    placeholder="Enter the Name Here"
                />
                {/* beds and baths */}
                <div className="flex justify-between ">
                    <div className="flex justify-start flex-col ">
                        <p className="text-lg mt-6 font-semibold">Beds</p>
                        <input
                            type="number"
                            id="bedrooms"
                            value={bedrooms}
                            onChange={onChange}
                            required
                            className="w-1/2 p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out px-4 text-xl text-gray-700 text-center"
                            placeholder="Number"
                        />
                    </div>

                    <div className="flex justify-start flex-col ">
                        <p className="text-lg mt-6 font-semibold">Baths</p>
                        <input
                            type="number"
                            id="bathrooms"
                            value={bathrooms}
                            onChange={onChange}
                            required
                            className="w-11/12 p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out px-4 text-xl text-gray-700 text-center"
                        />
                    </div>
                </div>

                {/* parking spot */}
                <p className="text-lg mt-6 font-semibold">Parking Spot</p>
                <div className="flex justify-between gap-4 mt-4 items-center">
                    <button className={`btn w-1/2 ${parking === 'yes' ? 'btn' : 'bg-white text-black border-none'}`} id="parking" value="yes" onClick={onChange}>
                        Yes
                    </button>
                    <button className={`btn w-1/2 ${parking === 'no' ? 'btn' : 'bg-white text-black border-none'}`} onClick={onChange} id="parking" value="no">
                        No
                    </button>
                </div>

                {/* Furnished */}
                <p className="text-lg mt-6 font-semibold">Furnished</p>
                <div className="flex justify-between gap-4 mt-4 items-center">
                    <button className={`btn w-1/2 ${furnished === 'yes' ? 'btn' : 'bg-white text-black border-none'}`} id="furnished" value="yes" onClick={onChange}>
                        Yes
                    </button>
                    <button className={`btn w-1/2 ${furnished === 'no' ? 'btn' : 'bg-white text-black border-none'}`} onClick={onChange} id="furnished" value="no">
                        No
                    </button>
                </div>

                {/* Address */}
                <p className="text-lg mt-6 font-semibold">Address</p>

                <textarea
                    name="address"
                    id="address"
                    rows="5"
                    value={address}
                    onChange={onChange}
                    className="w-full p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out px-4 text-xl text-gray-700"
                    placeholder="Address"></textarea>
                {!geoLoactionEnabled && (
                    <div className="flex">
                        <div className="">
                            <p className="text-lg mt-6 font-semibold">Latitude</p>
                            <input
                                type="number"
                                id="latitude"
                                value={latitude}
                                onChange={onChange}
                                required
                                className="w-11/12 p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out px-4 text-xl text-gray-700 text-center"
                            />
                        </div>

                        <div className="">
                            <p className="text-lg mt-6 font-semibold">Longitude</p>
                            <input
                                type="number"
                                id="longitude"
                                value={longitude}
                                onChange={onChange}
                                required
                                className="w-11/12 p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out px-4 text-xl text-gray-700 text-center"
                            />
                        </div>
                    </div>
                )}

                {/* Description */}
                <p className="text-lg mt-6 font-semibold">Description</p>

                <textarea
                    name="description"
                    id="description"
                    rows="5"
                    value={description}
                    onChange={onChange}
                    className="w-full p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out px-4 text-xl text-gray-700"
                    placeholder="Description"></textarea>

                {/* offer */}
                <p className="text-lg mt-6 font-semibold">Offer</p>
                <div className="flex justify-between gap-4 mt-4 items-center">
                    <button className={`btn w-1/2 ${offer === 'yes' ? 'btn' : 'bg-white text-black border-none'}`} id="offer" value="yes" onClick={onChange}>
                        Yes
                    </button>
                    <button className={`btn w-1/2 ${offer === 'no' ? 'btn' : 'bg-white text-black border-none'}`} onClick={onChange} id="offer" value="no">
                        No
                    </button>
                </div>

                {/* Regular Price */}
                <div className="flex flex-col justify-start items-start">
                    <p className="text-lg mt-6 font-semibold">Regular Price</p>
                    <div className="flex gap-6">
                        <input
                            type="number"
                            id="regularPrice"
                            value={regularPrice}
                            onChange={onChange}
                            className="w-11/12 p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out px-4 text-xl text-gray-700 text-center"
                        />
                        {type === 'rent' && (
                            <div className="flex items-center">
                                <p>$/Month</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Discounted Price */}
                <div className="flex flex-col justify-start items-start">
                    <p className="text-lg mt-6 font-semibold">Discounted Price</p>
                    <div className="flex gap-6">
                        <input
                            type="number"
                            id="discountedPrice"
                            value={discountedPrice}
                            onChange={onChange}
                            className="w-11/12 p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out px-4 text-xl text-gray-700 text-center"
                        />
                        {type === 'sell' && (
                            <div className="flex items-center">
                                <p>$/Month</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* upload images */}
                <div className="space-y-4 mb-10">
                    <p className="text-lg mt-6 font-semibold">Images</p>
                    <p className="font-semibold">The first image will be the cover (max.6)</p>
                    <input type="file" id="images" className="file-input file-input-bordered file-input-error w-full max-w-xs" onChange={onChange} accept=".jpg,.png,.jpeg" multiple required />
                </div>

                <button type="submit" className="btn w-full bg-blue-600 border-none font-medium hover:shadow-xl mb-10">
                    Create Listing
                </button>
            </form>
        </main>
    );
};

export default CreateListing;
