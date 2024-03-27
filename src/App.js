import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Warranty from "./pages/Warranty";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Faq from "./pages/Faq";
import TCare from "./pages/TCare";
import NewsEvents from "./pages/NewsEvents";
import LatestNewsEvents from "./pages/LatestNewsEvents";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  useEffect(() => {
    // Dispatch action to set the static value when the component mounts
    const initialValue =
      "OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE";
    store.dispatch({ type: "SET_VALUE", payload: initialValue });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/t-care" element={<TCare />} />
            <Route path="/latest-news-and-events" element={<NewsEvents />} />
            <Route path="/news-and-events" element={<LatestNewsEvents />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
