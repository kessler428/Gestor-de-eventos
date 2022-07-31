import { useDispatch, useSelector } from "react-redux";
import { aproveOrder } from "../../../../redux/thunks";
import { SpinnerLoading } from "../../../SpinnerLoading";
import { setIsLoading } from "../../../../redux/slices/uiSlices";

export const Data = ({
  id,
  nombreCompleto,
  email,
  comprobantePago,
}) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.ui)


  const acceptRequest = () => {
    dispatch(setIsLoading(true))
    dispatch(aproveOrder(id, true));
  };

  return (
    <div key={id}>
      {isLoading ? <SpinnerLoading /> : 
        <>
          <div className="py-3 w-full border-b-2 hidden md:block overflow-auto">
            <div className="flex flex-row justify-between space-x-12">
              <div className="w-1/5 text-center">
                <p className="text-sm">#00{id}</p>
              </div>

              <div className="w-1/5 text-center">
                <p className="text-sm">{nombreCompleto}</p>
              </div>

              <div className="w-1/5 text-center">
                <p className="text-sm">{email}</p>
              </div>

              <div className="w-1/5 text-center flex justify-center">
                <button
                  className="bg-green-600 text-white text-sm h-10 px-2 py-1 rounded-xl mr-4"
                  onClick={acceptRequest}
                >
                  Aceptar
                </button>
              </div>

              <div className="w-1/5 text-center flex justify-center">
                <a
                  className="bg-yellow-400 text-white text-sm h-10 px-2 py-2 rounded-xl flex items-center"
                  href={comprobantePago}
                >
                  Descargar
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:hidden mt-5">
            <div className="bg-white p-4 rounded-lg shadow-lg space-y-4 text-sm">
              <div className="text-blue-500">Pedido #00{id}</div>
              <div className="font-bold">{nombreCompleto}</div>
              <div>{email}</div>
              <div className="flex flex-row justify-end space-x-4">
                <div className="flex justify-center items-center">
                  <button
                    className="bg-green-600 text-white px-3.5 py-2 rounded-xl"
                    onClick={acceptRequest}
                  >
                    Aceptar
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    className="bg-yellow-500 text-white px-2 py-2 rounded-xl"
                    href={comprobantePago}
                  >
                    Descargar comprobante
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  );
};
