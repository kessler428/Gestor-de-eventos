import { CgNotes } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { AiOutlineQrcode } from "react-icons/ai";

import "../../index.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="fixed mt-[63px] hidden sm:flex top-0 left-0 h-screen w-16 m-0 flex-col bg-bg-admin text-black border-r">
      <NavLink
        to="/order"
        className={({ isActive }) =>
          isActive
            ? "bg-bg-violet mt-6 mb-4 p-3 text-white rounded mx-2"
            : "mt-4 mb-4 p-4 text-white hover:bg-bg-violet-hover"
        }
      >
        <SideBarIcon icon={<CgNotes size="20" />} text="Pedidos" />
      </NavLink>
      <NavLink
        to="/asistentes"
        className={({ isActive }) =>
          isActive
            ? "bg-bg-violet mt-6 mb-4 p-3 text-white rounded mx-2"
            : "mt-4 mb-4 p-4 text-white hover:bg-bg-violet-hover"
        }
      >
        <SideBarIcon icon={<FiUsers size="20" />} text="Asistentes" />
      </NavLink>
      <NavLink
        to="/scanner"
        className={({ isActive }) =>
          isActive
            ? "bg-bg-violet mt-6 mb-4 p-3 text-white rounded mx-2"
            : "mt-4 mb-4 p-4 text-white hover:bg-bg-violet-hover"
        }
      >
        <SideBarIcon icon={<AiOutlineQrcode size="20" />} text="Escaner Qr" />
      </NavLink>
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sideBarIcon group">
    {icon}
    <span className="sideBar-Tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
