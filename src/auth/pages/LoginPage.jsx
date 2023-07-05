import React from "react";
import { useForm } from "../../hooks/useForm";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

export const LoginPage = () => {
  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
  } = useForm(loginFormFields);

  const loginSubmit = (event) => {
    event.preventDefault();
    console.log({ loginEmail, loginPassword });
  };
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
