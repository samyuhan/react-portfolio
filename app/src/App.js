import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;