import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/index";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
