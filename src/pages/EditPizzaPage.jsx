import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";


const EditPizzaPage = () => {
  const { id } = useParams(); // מזהה של הפיצה לעריכה
  const { pizzas, setPizzas } = useContext(PizzaContext); // גישה למערך הפיצות
  const navigate = useNavigate();

  // אם עורכים פיצה קיימת, מגדירים את המצב לפי הפיצה הקיימת. אחרת, מתחילים עם ערכים ריקים.
  const [size, setSize] = useState(id ? pizzas[id]?.size || "" : "");
  const [name, setName] = useState(id ? pizzas[id]?.name || "" : "");

  const [toppings, setToppings] = useState(id ? pizzas[id]?.toppings || [] : [] );

  const handleSave = () => {
    const updatedPizza = {name, size, toppings }; // יוצרים אובייקט חדש לפיצה
    if (id) {
      // אם זה עריכה של פיצה קיימת
     const updatedPizzas = pizzas.map((pizza, index) =>
        index === parseInt(id) ? updatedPizza : pizza
      );
      setPizzas(updatedPizzas); // Update the pizzas array in context
    } else {
      // If adding a new pizza, append to the pizzas array
      setPizzas([...pizzas, updatedPizza]);
    }
    navigate("/order-page"); // Navigate back to the order page
  };

  return (
    <div>
      <h1>{id ? "Edit Pizza" : "Add Pizza"}</h1>
         {/* Input for pizza name */}
         <div>
        <label htmlFor="pizzaName">Customer Name:</label>
        <input
          id="pizzaName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter customer name"
        />
      </div>
      <select value={size} onChange={(e) => setSize(e.target.value)}>
        <option value="">Select Size</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <div>
        <label>
          <input
            type="checkbox"
            value="Cheese"
            checked={toppings.includes("Cheese")}
            onChange={(e) =>
              setToppings((prev) =>
                prev.includes(e.target.value)
                  ? prev.filter((t) => t !== e.target.value)
                  : [...prev, e.target.value]
              )
            }
          />
          Cheese
        </label>
        <label>
          <input
            type="checkbox"
            value="Pepperoni"
            checked={toppings.includes("Pepperoni")}
            onChange={(e) =>
              setToppings((prev) =>
                prev.includes(e.target.value)
                  ? prev.filter((t) => t !== e.target.value)
                  : [...prev, e.target.value]
              )
            }
          />
          Pepperoni
        </label>
        {/* Add more toppings as needed */}
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={() => navigate("/order-page")}>Cancel</button>
    </div>
  );
};

export default EditPizzaPage;