import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/polpoPass.svg";

import { BiLogOut, BiMenu } from "react-icons/bi";
import { Logout } from "../../redux/thunks";

import "../../index.css";
import { useState } from "react";
import { ModalMenu } from "./ModalMenu";

function HeaderManager() {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const token = localStorage.getItem('token');

  const [modal, setModal] = useState(false)

  const closeSession = () =>{
    dispatch( Logout(token) )
    localStorage.clear();
    navigate('/')
  }

  return (
    <div className="flex flex-col">
      <div className="w-full flex fixed flex-row h-16 justify-between py-2 pl-8 bg-bg-admin border-b">
        <div className="sm:hidden flex items-center justify-center">
          <button onClick={() => setModal(!modal)}>
            <BiMenu className="text-white h-6 w-6"/>
          </button>
        </div>
        <div className=" flex items-center justify-center">
          <img className="w-[110px]" src={logo} alt="Logo polpoevents" />
        </div>
        <div className=" w-auto flex justify-center items-center mr-4">
          <button
            onClick={closeSession}
          >
            <abbr title="Cerrar sesion">
              <BiLogOut className="text-white h-6 w-6" />
            </abbr>
          </button>
        </div>
      </div>
      <div>
        <ModalMenu modal={modal} setModal={setModal} />
      </div>
    </div>
  );
}

export default HeaderManager;
