import { Outlet,  } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { useState } from "react";
import './Main.css'

const Main = () => {

    // After_Assignment
    // const location = useLocation()
    // const onlyOutlet = location?.pathname === '/signup' || location?.pathname === '/login';

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`theme-${theme}`}>
        <Navbar toggleTheme={toggleTheme}></Navbar>
        <div className="mx-auto">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        {/* not now after assignment */}
        {/* {
            onlyOutlet || <Navbar/>
        } */}
        {/* {
            onlyOutlet || <Footer></Footer>
        } */}
        </div>
    );
};

export default Main;