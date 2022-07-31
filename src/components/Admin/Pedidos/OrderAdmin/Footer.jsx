import React from "react";
import { useSelector } from "react-redux";

export const GridFooter = ({ setPageSize }) => {
  const { pagination } = useSelector((state) => state.stage);
  const { totalItems, currentPage, totalPages } = pagination;

  const handleSelect = (e) => {
    setPageSize(Number(e.target.value));
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <div>
            <select
              onChange={handleSelect}
              className="cursor-pointer bg-gray-100 border-0 outline-none py-2 px-0 tablet:px-2"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <p>
            Mostrando {currentPage + 1} - {totalPages} de {totalItems}
          </p>
        </div>
      </div>
    </>
  );
};
