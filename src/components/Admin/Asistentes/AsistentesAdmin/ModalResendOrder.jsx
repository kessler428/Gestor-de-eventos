export const ModalResendOrder = ({ ModalResendOrder, setModalResendOrder }) => {
  return (
    <>
      {ModalResendOrder && (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-70 overflow-y-auto h-full w-full z-50">
          <div className="w-full h-full flex justify-center items-center">
            <div className="mx-auto border w-5/6 h-5/6 shadow-lg rounded-md bg-white">
              <div className="text-center">
                <h2 className="text-xl font-semibold">
                  Reenvia correo electronico de informacion
                </h2>
              </div>
              <hr />

              <div>
                Reenviar correo electronico
              </div>

              <div className="flex items-end justify-end h-4/6 mr-10 gap-6">
                <button
                  className="px-4 py-2 border-2 rounded"
                  onClick={() => setModalResendOrder(!ModalResendOrder)}
                >
                  Cancelar
                </button>
                <button className=" bg-bg-violet border-2 hover:bg-bg-violet-hover px-4 py-2 rounded text-white font-bold">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
