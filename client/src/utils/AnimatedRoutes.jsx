import React from "react";
import Login from "../pages/Login";
import PersonalInfo from "../pages/AccountPage";
import Register from "../pages/Register";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import EditForm from "../Components/EditForm";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/edit" element={<EditForm></EditForm>}></Route>
        <Route path="/account" element={<PersonalInfo></PersonalInfo>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
