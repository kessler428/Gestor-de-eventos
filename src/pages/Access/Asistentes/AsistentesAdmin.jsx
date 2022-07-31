import { useDispatch, useSelector } from "react-redux";

//Images
import pedidos from "../../../img/pedidos.png";

// Components
import SideBar from "../../../components/SideBar";
import HeaderManager from "../../../components/Header/HeaderManager";
import { TableData } from "../../../components/Admin/Asistentes/AsistentesAdmin/TableData";
import { GridSearchBar } from "../../../components/Admin/Asistentes/AsistentesAdmin/GridSearch";
import { useEffect } from "react";
import { getAllAsistences } from "../../../redux/thunks";

const AsistentesAdmin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAsistences());
  }, [dispatch]);

  const { listAsistence } = useSelector((state) => state.asistence);

  return (
    <>
      <HeaderManager />
      <SideBar />
      <hr />
      <div className="bg-white">
        <div className="mx-auto w-10/12 sm:pl-12 py-24">
          <h1 className="text-2xl sm:text-4xl md:text-6xl text-titleTextColor font-bold">
            Asistentes
          </h1>
          <hr />

          <GridSearchBar />

          {listAsistence.length === 0 ? (
            <div className="flex flex-col mt-10 justify-center ml-20">
              <div className="flex justify-center">
                <img
                  src={pedidos}
                  alt=""
                  className="h-32 bg-gray-100 rounded-full p-4 w-32"
                />
              </div>
              <div className="flex justify-center">
                <p className="text-gray-600 font-bold">
                  No hay asistentes aprobados
                </p>
              </div>
            </div>
          ) : (
            <TableData />
          )}
        </div>
      </div>
    </>
  );
};

export default AsistentesAdmin;
