import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useNavigate } from "react-router-dom";
import "./OrderPage.css";

const OrderPage = () => {
  const { pizzas, setPizzas, setOrders } = useContext(PizzaContext); // Access setPizzas to clear pizzas
  const navigate = useNavigate();

  const handleOrder = () => {
    if (pizzas.length === 0) {
      alert("No pizzas to order!");
      return;
    }

    // Add the current pizzas as a new order
    setOrders((prevOrders) => {
      const newOrders = [...prevOrders, { pizzas: [...pizzas] }];
      console.log("New Orders Array:", newOrders);
      return newOrders;
    });

    // Clear the pizzas array to reset the page
    setPizzas([]);
    
    alert("Order placed successfully!");
  };

  return (
    <div>
      <h1>Pizza Order</h1>
      
      <ul>
        {pizzas.map((pizza, index) => (
          <li key={index}>
            <span className="pizza-details">{pizza.name}: {pizza.size} - {pizza.toppings.join(", ")}</span>
            <button className="edit-button"onClick={() => navigate(`/edit-pizza/${index}`)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
      <div className="button-container">
      
      <button onClick={() => navigate("/edit-pizza")}>Add Pizza</button>
      <button onClick={handleOrder}>Send Order</button>
      <button onClick={() => {
        setPizzas([]); 
        navigate("/");
        }}>
  Home
</button>
      </div>
    </div>
  );
};

export default OrderPage;
