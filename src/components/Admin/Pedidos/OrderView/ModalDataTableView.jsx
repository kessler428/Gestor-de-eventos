import { NavLink } from "react-router-dom";

export const ModalDataTableView = ({ modalData }) => {
  return (
    <div className="flex justify-end m-8">
      {modalData && (
        <div className="container absolute -mt-72 bg-white shadow-lg border-2 w-auto overflow-x-hidden">
          <div className="flex-col flex">
            <NavLink
              to="/order_view"
              className="py-4 w-full text-sm px-4 hover:bg-gray-100"
            >
              Ver
            </NavLink>
            <NavLink to="/" className="py-4 text-sm px-4 hover:bg-gray-100">
              Editar
            </NavLink>
            <NavLink to="/" className="py-4 text-sm px-4 hover:bg-gray-100">
              Cancelar
            </NavLink>
            <NavLink to="/" className="py-4 text-sm px-4 hover:bg-gray-100">
              Eliminar
            </NavLink>
            <NavLink to="/" className="py-4 text-sm px-4 hover:bg-gray-100">
              Añadir nota de asistente
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
