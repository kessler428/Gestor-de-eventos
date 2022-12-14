import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClear } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../../../redux/slices/uiSlices";
import { getAllOrders, searchOrder } from "../../../../redux/thunks";

export const GridSearchBar = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleInputChange = ({ target }) => {
    setSearch(target.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true))
    dispatch(searchOrder(search));
  };

  const reset = () => {
    setSearch('')
    dispatch(setIsLoading(true))
    dispatch(getAllOrders())
  }

  return (
    <>
      <div className="flex flex-row items-end justify-between gap-2">
        <form
          className="bg-transparent flex justify-between w-9/12 md:w-10/12"
          onSubmit={onsubmit}
        >
          <div className="flex flex-row w-full mt-10 justify-center">
            <div className="w-full flex flex-row border border-gray-700">
              <AiOutlineSearch className="h-12 w-12 px-4" />
              <input
                className="w-full bg-white py-2 outline-none"
                placeholder="Buscar por nombre"
                type="text"
                name="search"
                value={search}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
        <div 
          className="w-4/12 md:w-2/12 flex flex-row border md:px-2 border-gray-700 hover:bg-gray-200 py-3 items-center justify-center cursor-pointer"
          onClick={ reset }
        >
          <AiOutlineClear className="mr-2" />
          <p>Limpiar</p>
        </div>
      </div>
    </>
  );
};
