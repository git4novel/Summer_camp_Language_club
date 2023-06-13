import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp&login/SignUp";
import Login from "../pages/SignUp&login/Login";
import ErrorPageLayout from "../layouts/ErrorPageLayout";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../pages/DashBoard/Dashboard";
import PrivateRoute from "./PrivateRoute";

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
        },
        // error page navigation
        {
          path: '*',
          element: <Navigate to={'/errorpage'}></Navigate>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        }
      ]
    },
    {
      path: '/errorpage',
      element: <ErrorPageLayout></ErrorPageLayout>
    },
    // dashboard here
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    }

  ]);
export default router;