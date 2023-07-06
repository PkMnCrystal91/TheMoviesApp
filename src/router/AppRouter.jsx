import { LoginPage } from "../auth";
import { useAuthStore } from "../hooks/useAuthStore";
import { Home } from "../kodigo-app";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  const { status, user } = useAuthStore();

  if (status === "checking") {
    return <h3>Cargando...</h3>;
  }
  return (
    <Routes>
      {user.token ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/auth/*" element={<LoginPage />} />

          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      )}
    </Routes>
  );
};
