/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import "./App.css";
import Projects from "./pages/Projects";
import Admin from "./pages/Admin";
import LoginContext from "./components/Context";
import Register from "./components/Register";
import HappyWastes from "./pages/HappyWastes";
import TousAuMarche from "./components/TousAuMarche";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <LoginContext.Provider value={{ login, setLogin }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/register" element={<Register />} />
            <Route path="/projects/happywastes" element={<HappyWastes />} />
            <Route path="/projects/tousaumarche" element={<TousAuMarche />} />
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
