import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PizzaProvider } from "./context/PizzaContext"; // Import the provider
import OrderPage from "./pages/OrderPage";
import EditPizzaPage from "./pages/EditPizzaPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import Home from "./pages/Home";
import "./global.css"


function App() {
  return (
    <PizzaProvider> {/* Wrap your app with the provider */}
      <Router>
        <Routes>
          <Route path="/home-page" element={<Home/>}/>

          <Route path="/" element={<Home />} />
          <Route path="/order-page" element={<OrderPage />} />
          

          <Route path="/edit-pizza/:id?" element={<EditPizzaPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/order-details/:id" element={<OrderDetailsPage />} />
          
        </Routes>
      </Router>
    </PizzaProvider>
  );
}

export default App;
