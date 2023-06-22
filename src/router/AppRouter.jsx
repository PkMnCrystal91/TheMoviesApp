import React from "react";
import { LoginPage } from "../auth";
import { Home } from "../kodigo-app";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
