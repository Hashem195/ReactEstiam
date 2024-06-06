import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./Comoposents/Header/Header";
import Home from "./Comoposents/HomePage/Home";
import Footer from "./Comoposents/Footer/Footer";

const Index = () => {
  return (
    <React.StrictMode>
      <Header />
      <Home />
      <App />
      <Footer />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
