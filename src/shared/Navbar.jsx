import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { BsMoonStars, BsMoonStarsFill } from "react-icons/bs";

// react awesome btn
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Navbar = ({ toggleTheme }) => {
  const { logOut, user } = useContext(AuthContext);
  const [dark, setDark] = useState(false);
  const setTheme = () => {
    setDark(!dark);
  };

  // react awesome reveal for text todo
  return (
    <div className="navbar bg-base-800 bg-nav">
      <div className="navbar-start">
        <div className="dropdown md:hidden flex">
          <label tabIndex={0} className="btn btn-ghost btn-circle flex">
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
          <Link to={"/"}>
            <img
              className="h-10"
              src="https://img.freepik.com/free-vector/languages-concept-illustration_114360-15683.jpg?w=360&t=st=1686668204~exp=1686668804~hmac=71d9110db8c06dc11810081971739de984cfd9b7673c683f29e60b183ae253a7"
            ></img>
          </Link>
          <ul
            tabIndex={0}
            className="menu float menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                className={dark ? "text-white" : "text-black"}
                to={"/signUp"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to={"/instructors"}>Instructors</Link>
            </li>
            <li>
              <Link to={"/classes"}>Classes</Link>
            </li>
          </ul>
        </div>
        {/*  for large devices */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <Link className={dark ? "text-white" : "text-black"} to={"/"}>
              <li className="font-semibold rounded-lg px-2 py-1 italic hover:bg-slate-100 ml-4">
                Home
              </li>
            </Link>
            <Link
              className={dark ? "text-white" : "text-black"}
              to={"/instructors"}
            >
              <li className="font-semibold rounded-lg  px-2 py-1 italic hover:bg-slate-100">
                Instructors
              </li>
            </Link>
            <Link
              className={dark ? "text-white" : "text-black"}
              to={"/classes"}
            >
              <li className="font-semibold rounded-lg px-2 py-1 italic hover:bg-slate-100">
                Classes
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          LinguaViva
        </Link>
        <Link to={"/"}>
          <img
            className="h-10"
            src="https://img.freepik.com/free-vector/languages-concept-illustration_114360-15683.jpg?w=360&t=st=1686668204~exp=1686668804~hmac=71d9110db8c06dc11810081971739de984cfd9b7673c683f29e60b183ae253a7"
          ></img>
        </Link>
      </div>
      <div className="navbar-end">
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
          {dark ? (
            <BsMoonStars
              className={dark ? "text-white" : "text-black"}
              onClick={setTheme}
            ></BsMoonStars>
          ) : (
            <BsMoonStarsFill
              className={dark ? "text-white" : "text-black"}
              onClick={setTheme}
            ></BsMoonStarsFill>
          )}
        </button>
        {user ? (
          <>
            <Link
              className={
                dark
                  ? "text-white italic font-semibold mx-2"
                  : "text-black italic font-semibold mx-2"
              }
              to={"/dashboard/selected-classes"}
            >
              Dashboard
            </Link>
            <img
              className="rounded-full h-10 w-10 mx-1"
              src={user.photoURL}
            ></img>
            <button onClick={logOut}>
              <AwesomeButton cssModule={AwesomeButtonStyles} type="primary">
                Log Out
              </AwesomeButton>
            </button>
          </>
        ) : (
          <Link to={"/login"}>
            <AwesomeButton cssModule={AwesomeButtonStyles} type="secondary">
              Login
            </AwesomeButton>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
