import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Event from "./pages/Event";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='event' element={<Event />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
