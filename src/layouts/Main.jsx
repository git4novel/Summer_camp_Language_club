import { Outlet,  } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";


const Main = () => {

    // After_Assignment
    // const location = useLocation()
    // const onlyOutlet = location?.pathname === '/signup' || location?.pathname === '/login';
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        {/* not now after assignment */}
        {/* {
            onlyOutlet || <Navbar/>
        } */}
        {/* {
            onlyOutlet || <Footer></Footer>
        } */}
        </>
    );
};

export default Main;