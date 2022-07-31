import mamaOasis from "../../img/mama.png";
import Gota from "../../assets/Gota.svg";

import { FaCalendarCheck, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="bg-home bg-cover bg-no-repeat h-1/2 flex flex-col-reverse lg:flex-row">
      <div className="lg:w-2/4 flex justify-end items-end lg:pt-20">
        <img className="w-full" src={mamaOasis} alt="" />
      </div>
      <div className="lg:w-2/3 flex justify-center flex-col pt-4 lg:pt-0">
        <div className="lg:w-5/6 flex lg:items-center flex-col justify-start lg:pb-20">
          <div className="flex justify-end w-full">
            <img className="w-12 h-12" src={Gota} alt="" />
          </div>
          <div className="">
            <p className="text-white text-[60px] md:text-[95px] lg:text-[100px] font-title text-center">MasterClass</p>
            <p className="text-white text-[40px] md:text-[60px] lg:text-[70px] font-[serif] pt-12 uppercase text-center">
              Para Mamá
            </p>
          </div>
          <div className="pt-10">
            <div className="flex gap-8 justify-around border-2 lg:text-2xl text-lg border-white px-4 py-6 mx-auto rounded-3xl w-fit">
              <div className="w-fit flex flex-col text-white">
                <div className="flex flex-row">
                  <FaCalendarCheck className="md:h-6 md:w-6 mt-1 mr-2" />
                  <span className="">20 de agosto</span>
                </div>
                <div className="w-fit flex flex-row">
                  <FaClock className="md:h-6 md:w-6 mt-1 mr-2" />
                  <span className="">Hora: 8:00 a.m</span>
                </div>
              </div>
              <div className="w-fit flex flex-col text-white">
                <div className="flex flex-row">
                  <FaMapMarkerAlt className="md:h-6 md:w-6 mt-1 mr-2" />
                  <span className="">Oasis Moravia</span>
                </div>
                <div className="flex flex-row">
                  <span className="">
                    <strong>Costo: ₡</strong>2000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
