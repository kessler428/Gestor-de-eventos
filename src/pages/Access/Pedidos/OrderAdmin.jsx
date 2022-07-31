//Images
import pedidos from "../../../img/pedidos.png";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import SideBar from "../../../components/SideBar";
import HeaderManager from "../../../components/Header/HeaderManager";
import { TableData } from "../../../components/Admin/Pedidos/OrderAdmin/TableData";

import { getAllOrders } from "../../../redux/thunks";
import { GridSearchBar } from "../../../components/Admin/Pedidos/OrderAdmin/GridSearch";

const OrderAdmin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const { listOrders } = useSelector((state) => state.order);

  return (
    <>
      <HeaderManager />
      <SideBar />
      <hr />
      <div className="bg-white">
        <div className="mx-auto w-11/12 lg:w-10/12 sm:pl-12 py-24">
          <h1 className="text-2xl sm:text-4xl md:text-6xl text-titleTextColor font-bold">
            Pedidos
          </h1>
          <hr />

          <GridSearchBar />

          {listOrders.length === 0 ? (
            <div className="flex flex-col mt-10 justify-center">
              <div className="flex justify-center">
                <img
                  src={pedidos}
                  alt=""
                  className="h-32 bg-gray-100 rounded-full p-4 w-32"
                />
              </div>
              <div className="flex justify-center">
                <p className="text-gray-600 font-bold">
                  No hay pedidos que mostrar
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

export default OrderAdmin;
