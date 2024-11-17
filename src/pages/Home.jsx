import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import "./Home.css"; // Ensure this line is present and correct
import "../global.css"; // Ensure this line is present and correct





const Home=()=>{
const navigate=useNavigate()
return(
    <div className="home-container">
        <h1 className="home-title">Pizza App</h1>
        <button className="home-button"onClick={()=>navigate("/order-page")}>Order Pizza Now!</button>
        <button className="home-button" onClick={()=>navigate("/admin/orders")}>Admins</button>
    </div>
)
}
export default Home