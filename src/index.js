import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import MentionLegal from "./Comoposents/Footer/MentionLegal/MentionLegal";
import reportWebVitals from "./reportWebVitals";
import Header from "./Comoposents/Header/Header";
import Home from "./Comoposents/HomePage/Home";
import Footer from "./Comoposents/Footer/Footer";
import Donate from "./Comoposents/Don/Donate";

const Index = () => {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/MentionLegal" element={<MentionLegal />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
