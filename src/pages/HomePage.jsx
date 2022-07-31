import React, { useEffect } from "react";
import { Header } from "../components/HomePage/Header";

import { NavLink } from "react-router-dom";
import { SpeakerCard } from "../components/SpeakerCard";
import regalo from "../assets/regalo.svg";

export const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-purple">
      <Header />
      <div className="zig-zag-top">
        <div className="xl:px-40 md:px-28 px-10">
          <div className="xl:text-2xl md:text-xl mt-10 lg:mt-20 text-white">
            <h4 className="font-bold">
              Si eres una #mamáoasis no te lo puedes perder.
            </h4>
            <p className="mt-4">
              En Master Class para Mamá aprenderemos como hacer para modificar
              la herencia que traemos que ha sido contraria al plan de Dios y
              poder abrazar y aceptar la verdadera herencia en nuestras vidas y
              nuestra descendencia.
            </p>
            <p className="font-bold mt-4">
              Compartamos un rico desayuno y aprendamos juntas de la HERENCIA.
            </p>
            <div className="my-12">
              <hr className="zig" />
              <hr className="zag" />
            </div>
          </div>
          <SpeakerCard />
          <div className="mt-12">
            <hr className="zig" />
            <hr className="zag" />
          </div>
        </div>
        <div className="bg-flower bg-cover min-h-[410px] bg-top bg-no-repeat w-full flex flex-col justify-center items-center text-white">
          <h2 className="md:text-5xl text-2xl font-bold">
            Formulario de registro
          </h2>
          <div className="mt-8 flex gap-8">
            <NavLink
              to="/register"
              className="bg-white xl:text-2xl border-none rounded-3xl border-2 font-bold text-purple px-8 py-3 md:py-4 xl:py-5 flex items-center"
            >
              Registrarme
            </NavLink>
            <NavLink
              to="/register?type=gift"
              className="bg-white xl:text-2xl border-none rounded-3xl border-2 font-bold text-purple px-8 py-2 md:py-4 xl:py-5 flex gap-4 flex-row"
            >
              <img className="w-12" src={regalo} alt="Regalo" />
              <p>
                Certificado
                <br />
                de regalo
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
