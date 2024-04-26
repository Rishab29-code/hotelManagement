"use client"
import { addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { HotelInfoDetails, SlugDetails } from '../../../Prototype';
import './AddHotelForm.css'
import { collection, getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import Link from 'next/link';


const firebaseConfig = {
    apiKey: "AIzaSyAgTxp5_9Ymm-DpQoZ45pjMgbkCsL8j1IM",
    authDomain: "hotel-management-1c7fa.firebaseapp.com",
    projectId: "hotel-management-1c7fa",
    storageBucket: "hotel-management-1c7fa.appspot.com",
    messagingSenderId: "476472408958",
    appId: "1:476472408958:web:187597399463ffd9a2112f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const AddHotelForm = () => {
    const [hotelInfo, setHotelInfo] = useState(new HotelInfoDetails());

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setHotelInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate data before submitting
       

        try {
            if (!hotelInfo.hotelName || !hotelInfo.hotelAddress || !hotelInfo.hotelEmailId) {
                alert('Please fill in all required fields.');
                return;
            }
            const { hotelSlugsDetails } = hotelInfo;
            hotelSlugsDetails.hotel = hotelInfo.hotelName.toLowerCase().replace(/\s+/g, '-')
            hotelSlugsDetails.hotelCity = hotelInfo.hotelCity.toLowerCase().replace(/\s+/g, '-')
            hotelSlugsDetails.hotelCountry = hotelInfo.hotelCountry.toLowerCase().replace(/\s+/g, '-')
            hotelSlugsDetails.hotelRegion = hotelInfo.hotelRegion.toLowerCase().replace(/\s+/g, '-')
            hotelSlugsDetails.hotelState = hotelInfo.hotelState.toLowerCase().replace(/\s+/g, '-')
            // Add document to the collection
            // const companyRef = await addDoc(Hotels, { ...hotelInfo})
            const hotelsCollection = collection(db, 'Hotels');

            // Add document to the collection using addDoc
            await addDoc(hotelsCollection, { ...hotelInfo });


            console.log("Document written");
            alert('Hotel added successfully!');
            // Clear the form after successful submission
            // setHotelInfo(new HotelInfoDetails());
            window.location.reload()

        } catch (error) {
            console.error('Error adding hotel:', error);
            alert('An error occurred while adding the hotel. Please try again.');
        }
    };







    return (


        <form onSubmit={handleSubmit} className="add-hotel-form">
            <div className="form-group">
                <label htmlFor="hotelName">Hotel Name</label>
                <input type="text" id="hotelName" name="hotelName" value={hotelInfo.hotelName || ""} onChange={handleChange} placeholder="Hotel Name" required />
            </div>
            <div className="form-group">
                <label htmlFor="hotelEmailId">Email</label>
                <input type="text" id="hotelEmailId" name="hotelEmailId" value={hotelInfo.hotelEmailId} onChange={handleChange} placeholder="Email" required />
            </div>
            <div className="form-group">
                <label >Contact Number</label>
                <input type="text" name="hotelContactNumber" value={hotelInfo.hotelContactNumber.toString()} onChange={handleChange} placeholder="Contact Number" required />
            </div>
            <div className="form-group">
                <label >Landmark</label>
                <input type="text" name="hotelLandmark" value={hotelInfo.hotelLandmark} onChange={handleChange} placeholder="Landmark" required />
            </div>
            <div className="form-group">
                <label >Address</label>
                <input type="text" name="hotelAddress" value={hotelInfo.hotelAddress} onChange={handleChange} placeholder="Address" required />
            </div>
            <div className="form-group">
                <label >Starting Price</label>
                <input type="number" name="hotelStartingPrice" value={hotelInfo.hotelStartingPrice.toString()} onChange={handleChange} placeholder="Starting Price" required />
            </div>
            <div className="form-group">
                <label >Description</label>
                <input type="text" name="hotelDescription" value={hotelInfo.hotelDescription} onChange={handleChange} placeholder="Description" required />
            </div>
            <div className="form-group">
                <label >Rating</label>
                <input type="number" name="hotelStarRating" value={hotelInfo.hotelStarRating.toString()} onChange={handleChange} placeholder="Star Rating" required />
            </div>
            <div className="form-group">
                <label >Image</label>
                <input type="text" name="hotelImageUrl" value={hotelInfo.hotelImageUrl} onChange={handleChange} placeholder="Image URL" required />
            </div>
            <div className="form-group">
                <label >State</label>
                <input type="text" name="hotelState" value={hotelInfo.hotelState} onChange={handleChange} placeholder="State" required />
            </div>
            <div className="form-group">
                <label >City</label>
                <input type="text" name="hotelCity" value={hotelInfo.hotelCity} onChange={handleChange} placeholder="City" required />
            </div>
            <div className="form-group">
                <label >Country</label>
                <input type="text" name="hotelCountry" value={hotelInfo.hotelCountry} onChange={handleChange} placeholder="Country" required />
            </div>
            <div className="form-group">
                <label >Region</label>
                <input type="text" name="hotelRegion" value={hotelInfo.hotelRegion} onChange={handleChange} placeholder="Region" required />
            </div>
            <div className="form-group">
                <label >Longitude</label>
                <input type="number" name="hotelLongitude" value={hotelInfo.hotelLongitude.toString()} onChange={handleChange} placeholder="Longitude" required />
            </div>
            <div className="form-group">
                <label >Latitude</label>
                <input type="number" name="hotelLatitude" value={hotelInfo.hotelLatitude.toString()} onChange={handleChange} placeholder="Latitude" required />
            </div>
            <div className="form-group">
                <label >Pincode</label>
                <input type="text" name="hotelPincode" value={hotelInfo.hotelPincode} onChange={handleChange} placeholder="Pincode" required />
            </div>
            {/* Add similar div.form-group for each input field */}
            <button type="submit" className="submit-btn">Add Hotel</button>
        </form>



    );
};

export default AddHotelForm;
