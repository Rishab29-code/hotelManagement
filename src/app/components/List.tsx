
import { useEffect, useState } from "react";
import { getDocs,  collection } from 'firebase/firestore';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { HotelInfoDetails } from "../../../Prototype";
import Link from 'next/link'


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





const HotelList = () => {

    const [myArray, setMyarray] = useState([] as any[])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Hotels'));
                console.log("query", querySnapshot)
                const hotelList:any[]=[]
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    hotelList.push({ id: doc.id, ...data });
                });
                setMyarray(hotelList)

            }

            catch (error) {
                console.log("Error", error)
            }


        }
        fetchData()

    }, [])
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "10px", gap: "5px",width:"35rem" ,marginTop:"5rem"}}>
            <h1 style={{ marginBottom: "10px" }}>Hotel List</h1>
            <table style={{ width: "100%", maxWidth: "800px",color:"black" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f0f0f0" }}>
                        <th style={{ padding: "8px", border: "1px solid #ccc" }}>Name</th>
                        <th style={{ padding: "8px", border: "1px solid #ccc" }}>Email</th>
                        <th style={{ padding: "8px", border: "1px solid #ccc" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {myArray.map((item) => (
                        <tr key={item.id} style={{ backgroundColor: "#fff" }}>
                            <td style={{ padding: "8px", border: "1px solid #ccc" }}>{item.hotelName}</td>
                            <td style={{ padding: "8px", border: "1px solid #ccc" }}>{item.hotelEmailId}</td>
                            <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                                <Link href={`/hotel/${encodeURIComponent(item.id)}`} style={{ textDecoration: "none", color: "blue" }}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HotelList;