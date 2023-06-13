import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { BsMoonStars, BsMoonStarsFill } from "react-icons/bs";

// react awesome btn
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';



const Navbar = ({toggleTheme}) => {
 const {logOut, user} = useContext(AuthContext)
 const [dark, setDark] = useState(false)
  const setTheme = () =>{
    setDark(!dark)
  }

 return (
    <div className="navbar bg-base-800">
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className={dark ? "text-white" : 'text-black'} to={'/signUp'}>Home</Link>
            </li>
            <li>
              <Link to={'/instructors'}>Instructors</Link>
            </li>
            <li>
              <Link to={'/classes'}>Classes</Link>
            </li>
          </ul>
        </div>
        {/*  for large devices */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <Link className={dark ? "text-white" : 'text-black'} to={'/'}><li className="font-semibold rounded-lg px-2 py-1 italic hover:bg-slate-100 ml-4">Home</li></Link>
            <Link  className={dark ? "text-white" : 'text-black'} to={'/instructors'}><li className="font-semibold rounded-lg  px-2 py-1 italic hover:bg-slate-100">Instructors</li></Link>
            <Link className={dark ? "text-white" : 'text-black'} to={'/classes'}><li className="font-semibold rounded-lg px-2 py-1 italic hover:bg-slate-100">Classes</li></Link>
          </ul>
      </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-end">
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
          {
            dark ? <BsMoonStars className={dark ? "text-white" : 'text-black'} onClick={setTheme}></BsMoonStars> : <BsMoonStarsFill className={dark ? "text-white" : 'text-black'} onClick={setTheme}></BsMoonStarsFill>
          }      
        </button>
        {
          user ? <>
          <Link className={dark ? "text-white italic font-semibold mx-2" : 'text-black italic font-semibold mx-2'} to={'/dashboard'}>Dashboard</Link>
        <img className="rounded-full h-10 w-10 mx-1" src={user.photoURL}></img>
        <button onClick={logOut}>
        <AwesomeButton cssModule={AwesomeButtonStyles} type="primary">
        Log Out
        </AwesomeButton>
        </button>
          </>
          :
          <Link to={'/login'}><AwesomeButton cssModule={AwesomeButtonStyles} type="secondary">
          Login
          </AwesomeButton></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;


