"use client"
import React, { useEffect, useState } from 'react';
import { getDocs, query, where } from 'firebase/firestore';
import AddHotelForm from './components/AddHotelForm';
import HotelList from './components/List';




export default function Home() {
  // Define the state to hold the array of HotelInfoDetails objects
 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddHotelForm  />
      <HotelList />
      {/* {isEdit && <HotelDetailsPage/>} */}
      
    </main>
  );
}
