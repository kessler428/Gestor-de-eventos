import { useEffect, useState } from "react";
import { QrReader } from "@blackbox-vision/react-qr-reader";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import HeaderManager from "../../../components/Header/HeaderManager";
import SideBar from "../../../components/SideBar";
import { entranceByQrCode } from "../../../redux/thunks";

export const Scanner = () => {
  const dispatch = useDispatch();

  const [datas, setDatas] = useState("");

  const handleScan = (result) => {
    if (!!result) {
      setDatas(result?.text);
    }
  };

  useEffect(() => {
    if (datas !== "") {
      const asistenceId = decodeURI(datas);
      try {
        const jsonResult = JSON.parse(asistenceId);
        dispatch(entranceByQrCode(jsonResult.id, jsonResult.name ));
      } catch (error) {
        Swal.fire({
          title:'¡Error!',
          text: 'QR no válido',
          icon: 'error'
        });
      }
    }
  }, [dispatch, datas]);

  return (
    <>
      <HeaderManager />
      <SideBar />
      <hr />
      <div className="bg-white">
        <div className="mx-auto w-9/12 pt-28 text-center">
          <h1 className="text-6xl text-titleTextColor font-bold">
            Escanear código Qr
          </h1>
          <div className="w-full flex justify-center items-center">
            <div className="w-10/12 md:w-1/2">
              <QrReader scanDelay={500} onResult={handleScan} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
