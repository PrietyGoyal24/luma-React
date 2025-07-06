import React, { useState } from "react";

const FlightBooker = () =>{
    const [flightType, setflightType] = useState("one-way");
 const [departureDate, setfdepartureDate] = useState("")
 const [returnDate, setreturnDate] = useState("");

 const today = new Date().toISOString().split("T")[0];

 const isDepartureValid = () => {
    return departureDate && departureDate >= today;
 };
 const isReturnValid = () => {
    return (flightType === "return" && returnDate && returnDate >= departureDate);
 };
 const isFormValid = () =>{
    if(flightType === "one-way"){
        return isDepartureValid();
    }else{
        return isDepartureValid()&& isReturnValid();
    }
 };
 const handleSubmit = () =>{
    if(flightType ==="one-way"){
        alert(`You have booked a one-way flight on ${departureDate}.`);
    }else{
        alert(`You have booked a return flight from ${departureDate}to ${returnDate}`);
    }
 };

 return (
    <div>
        <label>
            Flight Type: 
            <select value={flightType} onChange={(e)=> setflightType(e.target.value)}>
                <option value="one-way">One-Way Flight </option>
                <option value="return">Return Flight</option>
            </select>
        </label>
        <div>
            <label>
                Departure Date: 
                <input type="date" value={departureDate} onChange={(e)=>setfdepartureDate(e.target.value)}/> 
            </label>
        </div>
        {flightType==="return" && (
        
        <div>

            <label>
                Return Date:
                <input type="date" value={returnDate} onChange={(e)=>setreturnDate(e.target.value)}/>
            </label>

        </div>
        
        )}
        <button
        disabled={!isFormValid()} onClick={handleSubmit} style={{margin:"10px"}}>Book Flight</button>
    </div>

 );
};
export default FlightBooker;