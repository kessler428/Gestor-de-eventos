import mamaOasis from "../../img/mama-left.png";
import gota from "../../assets/Gota.svg";

export const Header = () => {
  return (
    <div className="bg-home bg-cover bg-no-repeat flex flex-col">
      <div className="right">
        <img className="w-10 lg:w-20 absolute right-8 top-8" src={gota} alt="Gota" />
      </div>
      <div className="pt-8 w-full text-center">
        <p className="text-white text-[60px] md:text-[105px] lg:text-[170px] font-title">MasterClass</p>
        <div className="pt-12 flex items-center justify-center gap-8 w-full">
          <hr className="w-16 lg:w-24" />
          <p className="text-white text-[30px] md:text-[65px] lg:text-[100px] font-[serif] uppercase text-center">
            Para Mamá
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2 flex items-end">
          <img src={mamaOasis} alt="" />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start py-12 px-20 lg:pr-12 font-bold">
          <div className="text-white text-lg lg:text-2xl text-center lg:text-left">
            <p>
              En Master Class para Mamá aprenderemos como hacer para modificar
              la herencia que traemos que ha sido contraria con Dios y poder
              abrazar y aceptar la verdadera herencia en nuestras vidas y
              nuestra descendencia.
            </p>
            <br />
            <p>
              Si eres una #mamáoasis no te lo puedes perder. Compartamos un rico
              desayuno y aprendamos juntas de la HERENCIA. Dirigido a Mamas de
              la Iglesia Oasis.
            </p>
          </div>
          <div className="w-fit flex flex-col text-sm md:text-lg lg:text-2xl text-white border-2 border-white rounded-2xl py-3 px-6 mt-6 gap-2">
            <p>
              <strong>Fecha: </strong>
              <span className="font-light">20 de Agosto</span>
            </p>
            <p>
              <strong>Hora: </strong>
              <span className="font-light">8:00 a.m</span>
            </p>
            <p>
              <strong>Lugar: </strong>
              <span className="font-light">Oasis Moravia</span>
            </p>
            <p>
              <strong>Costo: </strong>
              <span className="font-light">₡2,000</span>
            </p>
            <hr className="my-2" />
            <p>
              <strong>Pagos Sinpe Movil</strong>
            </p>
            <p>
              <strong>(+506) 8493-3939</strong>
            </p>
            <p>
              <strong>Cuenta Bancaria: </strong>
            </p>
            <p className="font-light">CR17015201001018349591</p>
            <p className="uppercase font-light">Banco de Costa Rica</p>
          </div>
        </div>
      </div>
    </div>
  );
};
