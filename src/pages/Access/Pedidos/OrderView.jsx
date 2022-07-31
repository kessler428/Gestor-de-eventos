//Hooks
import { useCallback, useEffect, useState } from "react";

// RRD
import { NavLink, useParams } from "react-router-dom";

// Codigo Qr
import QRCode from "qrcode";

// Redux
import { getOneOrderById } from "../../../redux/thunks.js";
import { useDispatch, useSelector } from "react-redux";

// Componentes
import SideBar from "../../../components/SideBar";
import HeaderManager from "../../../components/Header/HeaderManager.jsx";

// React Icons
import { FaArrowLeft } from "react-icons/fa";

export const OrderView = () => {
  let { userId } = useParams();
  const dispatch = useDispatch();
  const { getOneOrder } = useSelector((state) => state.order);

  const {
    id,
    nombreCompleto,
    email,
    telefono,
    areaServicio,
    comprobantePago
  } = getOneOrder;

  const [imageUrl, setImageUrl] = useState("");

  const generateQrCode = useCallback(async () => {
    try {
      const dataURL = {
        id: id,
        name: nombreCompleto,
        emailBeneficiario: email,
      };
      const resp = await QRCode.toDataURL(encodeURI(JSON.stringify(dataURL)));
      setImageUrl(resp);
    } catch (error) {
      console.log(error);
    }
  }, [email, id, nombreCompleto]);

  useEffect(() => {
    dispatch(getOneOrderById(userId));
    generateQrCode();
  }, [dispatch, generateQrCode, userId]);

  return (
    <>
      <HeaderManager />
      <SideBar />

      <hr />

      <div className="bg-bgWhite">
        <div className="mx-auto w-9/12 pt-28">
          <NavLink to="/asistentes" className="text-blue-600 flex">
            <FaArrowLeft className="mr-1 mt-1 h-3 w-3" />
            Pedidos
          </NavLink>
          <div className="flex flex-row justify-between">
            <h2 className="font-bold text-4xl">Pedido #00{id}</h2>
          </div>
          <div className="border shadow-xl flex mt-10 flex-col sm:flex-row">
            <div className="w-full sm:w-1/5 flex flex-col justify-center">
              <img src={imageUrl} alt="Event" />
              <div className="px-2 flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl mt-2">Mama Oasis</h3>
                <div className="flex flex-row my-4 text-sm text-center text-gray-800">
                  <p className="">Sabado 20 de Agosto del 2022</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-4/5 px-8 py-8">
              <h3 className="mt-4 text-2xl font-bold text-center sm:text-left">Detalles del pedido</h3>
              <div className="flex flex-col sm:flex-row w-full justify-between mt-4 gap-6">
                <div className="w-full sm:w-1/3 text-center">
                  <p className="font-bold text-base py-2">
                    Nombre del comprador
                  </p>
                  <p className="">{nombreCompleto}</p>
                </div>
                <div className="w-full sm:w-1/3 text-center">
                  <p className="font-bold text-base py-2">
                    Comprobante de pago
                  </p>
                  <a
                    className="text-white hover:bg-gray-200 bg-yellow-500 text-sm px-2 py-2 rounded-xl"
                    href={comprobantePago}
                  >
                    Descargar
                  </a>
                </div>
                <div className="w-full sm:w-1/3 text-center">
                  <p className="font-bold text-base py-2">
                    Area de servicio
                  </p>
                  <p className="">{areaServicio}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row mt-4 justify-between gap-6">
                <div className="w-full sm:w-1/3 text-center">
                  <p className="font-bold text-base py-2">
                    Numero de celular
                  </p>
                  <p className="">{telefono}</p>
                </div>
                <div className="w-full sm:w-2/3 text-center">
                  <p className="font-bold text-base py-2">Email</p>
                  <p className="">{email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderView;
