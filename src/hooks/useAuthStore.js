import { useDispatch, useSelector } from "react-redux";
import appApi from "../api/appApi";
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from "../store/auth/authSlice";

export const useAuthStore = () => {
  const { status, user, erroMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await appApi.post("/login", { email, password });
      localStorage.setItem("token", data.token);
      dispatch(
        onLogin({ email: email, password: password, token: data.token })
      );
    } catch (error) {
      dispatch(onLogout("Invalid Credentials"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  return {
    // Propiedades
    status,
    user,
    erroMessage,

    // Funciones
    startLogin,
  };
};
