import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp&login/SignUp";
import Login from "../pages/SignUp&login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
            path: 'login',
            element: <Login></Login>
        }
      ]
    },
  ]);
export default router;