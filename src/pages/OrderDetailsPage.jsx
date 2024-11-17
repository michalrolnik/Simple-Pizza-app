import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import "./OrderDetails.css"


const OrderDetailsPage = () => {
  const { id } = useParams();
  const orderId = parseInt(id, 10); // Convert id to a number
  const navigate = useNavigate(); // Call useNavigate to get the navigate function
  const { orders } = useContext(PizzaContext);
  const order = orders[orderId];

  if (!order) {
    return <p>Order not found</p>;
  }

  return (
    <div>
      <h1>Order Details</h1>
      
      <ul  className="order-details">
        {orders[id].pizzas.map((pizza, index) => (
          <li key={index}> 
            {pizza.name}: {pizza.size} - {pizza.toppings.join(", ")}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/admin/orders")}>Back</button>
    </div>
  );
};

export default OrderDetailsPage;
