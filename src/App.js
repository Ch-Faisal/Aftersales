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
import Print from "./pages/layout/print.js";
function App() {
  useEffect(() => {
    const initialValue =
      "OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE";
    store.dispatch({ type: "SET_VALUE", payload: initialValue });
  }, []);

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
            <Route path="/news-information/read/:slug" element={<NewsEvents />} />
            <Route path="/news-information" element={<LatestNewsEvents />} />
            <Route path="/Print" element={<Print />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
