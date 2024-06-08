import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Property from './pages/property';

export default function AnimatedRoutes({ properties }) {
  const location = useLocation();

  return (
    <AnimatePresence initial mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/*" element={<Home properties={properties} />} />
        <Route path="/About" element={<About />} />
        <Route path="/:id" element={<Property />} />
      </Routes>
    </AnimatePresence>
  );
}
