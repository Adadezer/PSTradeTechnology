import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import TradeProvider from "./context/TradeProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <TradeProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </TradeProvider>
    </>
  );
}

export default App;
