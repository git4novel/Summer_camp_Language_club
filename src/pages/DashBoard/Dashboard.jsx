import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

import "./DashBoard.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { SiGoogleclassroom, SiSololearn } from "react-icons/si";
import { FaUsersCog,} from "react-icons/fa";
import { FcPaid } from "react-icons/fc";
import { MdOutlinePayments } from "react-icons/md";

const Dashboard = () => {
  const { loading, } = useContext(AuthContext);

  const admin = true;
  const user = true;
  const instructor = true;

  return (
    <>
      <Helmet>
        <title>DashBoard | LinguaViva</title>
      </Helmet>
      <div className="flex flex-col md:flex-row justify-around p-4 border-2 border-cyan-600 m-2 max-w-7xl mx-auto rounded-xl">
        {/* links */}
        <div className="relative w-full md:w-1/4 h-[200px] md:h-[100vh] lg:h-[100vh] bg-cyan-500 text-white font-semibold rounded-t-lg md:rounded-l-lg">
          {/* navigation link Will be set here depending on user , admin , and instructor */}
          <div className="flex flex-row md:flex-col absolute md:top-1/2 top-2 space-y-2 pl-3 md:pl-5">
            {user && (
              <>
                <NavLink className={'flex items-center gap-1'} to="/dashboard/selected-classes"><SiGoogleclassroom/> My Selected Classes</NavLink>
                <NavLink className={'flex items-center gap-1'} to="/dashboard/enrolled-classes"><FcPaid></FcPaid> My Enrolled Classes</NavLink>
                <div className="divider">---</div>
                <NavLink className={'flex items-center gap-1'} to="/dashboard/payment-history"><MdOutlinePayments></MdOutlinePayments> Payment History</NavLink>
              </>
            )}
            {/* for instructor */}
            {instructor && (
              <>
                <NavLink className={'flex items-center gap-1'} to="/dashboard/add-class"><SiGoogleclassroom/> Add A Class</NavLink>
                <NavLink className={'flex items-center gap-1'} to="/dashboard/my-classes"><SiSololearn/>My Classes</NavLink>
              </>
            )}
            {/* for admin */}
            {admin && (
              <>
                <NavLink className={'flex items-center gap-1'} to="/dashboard/manage-classes"><SiGoogleclassroom /> Manage Classes</NavLink>
                <NavLink className={'flex items-center gap-1'} to="/dashboard/manage-users"><FaUsersCog/>  Manage Users</NavLink>
              </>
            )}
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
