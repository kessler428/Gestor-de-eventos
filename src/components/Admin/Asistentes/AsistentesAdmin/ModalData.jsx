import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch } from 'react-redux'
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { resendOrderById } from "../../../../redux/thunks";
import { ModalResendOrder } from "./ModalResendOrder";

export const ModalData = ({ modalData, setModalData, id }) => {

  const dispatch = useDispatch();
  const [modalResendOrder, setModalResendOrder] = useState(false);

  const resendOrder = () => {
    Swal.fire({
      text:'Desea reenviar el correo electronico.?',
      icon: 'question',
      confirmButtonText: 'Si',
      showDenyButton: true,
      denyButtonText: 'No'
    }).then((result) => {
      if(result.isConfirmed){
        dispatch(resendOrderById(id))
      }
    })
  }

  return (
    <>
      <div className="flex justify-end">
        {modalData && (
          <OutsideClickHandler
            onOutsideClick={() => {
              setModalData(false);
            }}
          >
            <div className="container absolute bg-white -ml-28 md:-ml-16 -mt-24 shadow-lg border-2 w-auto overflow-x-hidden">
              <div className="flex-col flex">
                <NavLink
                  to={`/order_view/${id}`}
                  className="py-4 w-full text-sm px-4 hover:bg-gray-100"
                >
                  Ver pedido
                </NavLink>
                <button
                  onClick={resendOrder}
                  className="py-4 text-sm px-4 text-left hover:bg-gray-100"
                >
                  Reenviar pedido
                </button>
              </div>
            </div>
          </OutsideClickHandler>
        )}
      </div>
      <ModalResendOrder
        ModalResendOrder={modalResendOrder}
        setModalResendOrder={setModalResendOrder}
      />
    </>
  );
};
