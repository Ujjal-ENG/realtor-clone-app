import React, { useState } from 'react';

const CreateListing = () => {
    const [formData, setFormData] = useState({
        type: 'rent',
        name: '',
        bedrooms: 1,
        bathrooms: 2,
        address: '',
        description: '',
        parking: false,
        furnished: false,
        offer: false,
        regularPrice: 11,
        discountedPrice: 12
    });
    const { type, name, bedrooms, bathrooms, address, description, parking, offer, furnished, regularPrice, discountedPrice } = formData;
    const onChange = (e) => {
        e.preventDefault();
        setFormData(!type);
    };
    return (
        <main className="max-w-md px-2 mx-auto">
            <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>

            <form>
                <p className="text-lg mt-6 font-semibold">Sell / Rent</p>

                <div className="flex justify-between gap-4 mt-4 items-center">
                    <button className={`btn w-1/2 ${type === 'sell' ? 'bg-white text-black border-none' : 'btn'}`} id="type" value="sale" onClick={onChange}>
                        Sell
                    </button>
                    <button className={`btn w-1/2 ${type === 'rent' ? 'bg-white text-black border-none' : 'btn'}`} onClick={onChange} id="type" value="rent">
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
                    className="w-full p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out px-4 text-xl text-gray-700"
                    placeholder="Enter the Name Here"
                />
                {/* beds and baths */}
                <div className="flex justify-between ">
                    <div className="flex justify-start flex-col ">
                        <p className="text-lg mt-6 font-semibold">Beds</p>
                        <input
                            type="number"
                            id="bed"
                            value={bedrooms}
                            onChange={onChange}
                            className="w-1/2 p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out px-4 text-xl text-gray-700"
                        />
                    </div>

                    <div className="flex justify-start flex-col ">
                        <p className="text-lg mt-6 font-semibold">Baths</p>
                        <input
                            type="number"
                            id="bath"
                            value={bathrooms}
                            onChange={onChange}
                            className="w-1/2 p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out px-4 text-xl text-gray-700"
                        />
                    </div>
                </div>

                {/* parking spot */}
                <p className="text-lg mt-6 font-semibold">Parking Spot</p>
                <div className="flex justify-between gap-4 mt-4 items-center">
                    <button className={`btn w-1/2 ${parking === 'yes' ? 'bg-white text-black border-none' : 'btn'}`} id="parking" value="yes" onClick={onChange}>
                        Yes
                    </button>
                    <button className={`btn w-1/2 ${parking === 'no' ? 'bg-white text-black border-none' : 'btn'}`} onClick={onChange} id="parking" value="no">
                        No
                    </button>
                </div>

                {/* Furnished */}
                <p className="text-lg mt-6 font-semibold">Furnished</p>
                <div className="flex justify-between gap-4 mt-4 items-center">
                    <button className={`btn w-1/2 ${furnished === 'yes' ? 'bg-white text-black border-none' : 'btn'}`} id="furnished" value="yes" onClick={onChange}>
                        Yes
                    </button>
                    <button className={`btn w-1/2 ${furnished === 'no' ? 'bg-white text-black border-none' : 'btn'}`} onClick={onChange} id="furnished" value="no">
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
                    <button className={`btn w-1/2 ${offer === 'yes' ? 'bg-white text-black border-none' : 'btn'}`} id="offer" value="yes" onClick={onChange}>
                        Yes
                    </button>
                    <button className={`btn w-1/2 ${offer === 'no' ? 'bg-white text-black border-none' : 'btn'}`} onClick={onChange} id="offer" value="no">
                        No
                    </button>
                </div>

                {/* Regular Price */}
                <div className="flex flex-col justify-start items-start">
                    <p className="text-lg mt-6 font-semibold">Regular Price</p>
                    <div className="flex gap-6">
                        <input
                            type="number"
                            id="regular-price"
                            value={regularPrice}
                            onChange={onChange}
                            className="w-11/12 p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out px-4 text-xl text-gray-700"
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
                            id="discount-price"
                            value={discountedPrice}
                            onChange={onChange}
                            className="w-11/12 p-2 rounded-md   outline-red-300 outline-4 border-4 transition ease-in-out px-4 text-xl text-gray-700"
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
                    <input type="file" id="images" class="file-input file-input-bordered file-input-error w-full max-w-xs" onChange={onChange} accept=".jpg,.png,.jpeg" multiple required />
                </div>

                <button type="submit" className="btn w-full bg-blue-600 border-none font-medium hover:shadow-xl mb-10">
                    Create Listing
                </button>
            </form>
        </main>
    );
};

export default CreateListing;
