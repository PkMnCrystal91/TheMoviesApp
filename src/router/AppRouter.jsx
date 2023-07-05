import { LoginPage } from "../auth";
import { Home } from "../kodigo-app";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  const authStatus = "not-authenticated";
  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <Route path="/auth/*" element={<LoginPage />} />
      ) : (
        <Route path="/home" element={<Home />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
