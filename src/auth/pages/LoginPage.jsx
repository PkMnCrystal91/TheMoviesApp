import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { useAuthStore } from "../../hooks/useAuthStore";
import Swal from "sweetalert2";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

export const LoginPage = () => {
  const { startLogin, erroMessage } = useAuthStore();

  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
  } = useForm(loginFormFields);

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  };

  useEffect(() => {
    if (erroMessage !== undefined) {
      Swal.fire("Authentication Error!!", erroMessage, "error");
    }
  }, [erroMessage]);

  return (
    <form onSubmit={loginSubmit}>
      <label htmlFor="">Email</label>
      <input
        type="text"
        name="loginEmail"
        value={loginEmail}
        onChange={onLoginInputChange}
      />
      <br />
      yarn dev
      <label htmlFor="">Password</label>
      <input
        type="password"
        name="loginPassword"
        value={loginPassword}
        onChange={onLoginInputChange}
      />
      <button>Loggin</button>
    </form>
  );
};
