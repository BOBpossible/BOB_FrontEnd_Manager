import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./pages/Customer";
import Login from "./pages/Login";
import Owner from "./pages/Owner";
import Service from "./pages/Service";
import './pages/style.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Customer" element={<Customer/>} />
          <Route path="/Owner" element={<Owner />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
