import { createBrowserRouter } from "react-router-dom";
import { Hero } from "./components/";
import { ErrorPage, HomePage, LoginPage, RegistrationPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegistrationPage />,
      },
    ],
  },
]);

export default router;
