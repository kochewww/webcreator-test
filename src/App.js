import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import data from "./data.json";
import Components from "./Components.js";
import Forms from "./Forms";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <main>
          {data.components.map(block => Components(block))}
          {Forms(data.form)}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
