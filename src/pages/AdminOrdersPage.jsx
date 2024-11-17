import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useNavigate } from "react-router-dom";
import "./AdminOrders.css"


const AdminOrdersPage = () => {
  const { orders,setOrders } = useContext(PizzaContext); // Access all orders from context
  const navigate = useNavigate();

  const viewOrderDetails = (orderId) => {
    navigate(`/order-details/${orderId}`); // Navigate to the details page for the order
  };
  
  console.log("Orders in AdminOrdersPage:", orders);

  const deleteOrder = (orderId) => {
    // Filter out the order to be deleted and update the orders array
    setOrders((prevOrders) => prevOrders.filter((_, index) => index !== orderId));
  }

  return (
    <div className="button-container">
      <h1>Admin Orders Page</h1>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            <span className="order"> Order{index + 1}:{order.name}</span>
            
            <button className="button" onClick={() => viewOrderDetails(index)}>View Details</button>
            <button className="button" onClick={() => deleteOrder(index)}>Delete Order</button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default AdminOrdersPage;
