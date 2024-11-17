import React, { createContext, useState } from "react";

// Create the context
export const PizzaContext = createContext();

// Create the provider component
export const PizzaProvider = ({ children }) => {
  // State for pizzas
  const [pizzas, setPizzas] = useState([]);

  // State for orders
  //const [orders, setOrders] = useState([]);
  const [orders, setOrders] = useState([
    { pizzas: [{name:"Ran" ,size: "Medium", toppings: ["Cheese", "Pepperoni"] }] },
    { pizzas: [{ name:"dan", size: "Large", toppings: ["Mushrooms", "Onions"] }] },
  ]);
  

  // Provide these values to the children components
  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas, orders, setOrders }}>
      {children}
    </PizzaContext.Provider>
  );
};
