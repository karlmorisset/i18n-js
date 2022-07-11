import Home from "@pages/Home";
import Produits from "@pages/Produits";
import Contact from "@pages/Contact";
import Header from "@components/Header/Header";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalContext from "./contexts/GlobalContext";

import "./App.css";

function App() {
  const [traductions, setTraductions] = useState({});
  const [lang, setLang] = useState("fr");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/traductions`)
      .then((response) => response.json())
      .then((data) => setTraductions(data));
  }, []);

  return (
    <div className="App">
      <GlobalContext.Provider value={{ traductions, lang, setLang }}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
