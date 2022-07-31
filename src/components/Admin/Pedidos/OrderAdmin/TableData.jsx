import React from "react";
import { Pagination } from "./Pagination";

export const TableData = () => {
  return (
    <>
      <div className="hidden md:flex flex-row justify-between gap-4 bg-gray-100 py-3 w-full mt-12 border-b">
        <div className="w-1/5 text-center">
          <p className="text-xs md:text-sm">Pedido</p>
        </div>

        <div className="w-1/5 text-center">
          <p className="text-xs md:text-sm">Comprador</p>
        </div>

        <div className="w-1/5 text-center">
          <p className="text-xs md:text-sm">Email</p>
        </div>

        <div className="w-1/5 text-center">
          <p className="text-xs md:text-sm">Aprobar</p>
        </div>

        <div className="w-1/5 text-center ">
          <p className="text-xs md:text-sm">Comprobante de pago</p>
        </div>
      </div>

      <Pagination itemsPerPage={5} />
    </>
  );
};
