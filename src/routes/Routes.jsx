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
import MySelectedClass from "../pages/DashBoard/Student/MySelectedClass";
import MyEnrolledClass from "../pages/DashBoard/Student/MyEnrolledClass";
import PaymentHistory from "../pages/DashBoard/Student/Payment/PaymentHistory";
import AddAClass from "../pages/DashBoard/Instructor/AddAClass";
import MyClasses from "../pages/DashBoard/Instructor/MyClasses";
import ManageClasses from "../pages/DashBoard/Admin/ManageClasses";
import ManageUser from "../pages/DashBoard/Admin/ManageUser";

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
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        },
        // error page navigation
        {
          path: '*',
          element: <Navigate to={'/errorpage'}></Navigate>
        },
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
      children: [
        {
          path: 'selected-classes',
          element: <MySelectedClass></MySelectedClass>
        },
        {
          path: 'enrolled-classes',
          element:<MyEnrolledClass></MyEnrolledClass>
        },
        {
          path: 'payment-history',
          element: <PaymentHistory></PaymentHistory>
        },
        // this is for instructor
        {
          path: 'add-class',
          element: <AddAClass></AddAClass>
        },
        {
          path: 'my-classes',
          element: <MyClasses></MyClasses>
        },
        // here is admins 
        {
          path: 'manage-classes',
          element: <ManageClasses></ManageClasses>
        },
        {
          path: 'manage-users',
          element: <ManageUser></ManageUser>
        }
      ]
    }

  ]);
export default router;