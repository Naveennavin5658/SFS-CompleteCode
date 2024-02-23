import React from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "./App.css"

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
