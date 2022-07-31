export const ModalQr = ({ qrModal, setQrModal, img }) => {
  return (
    <>
      {qrModal && (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-70 overflow-y-auto h-full w-full z-50">
          <div className="w-full h-full flex justify-center items-center">
            <div className="mx-auto p-5 border mobile:w-3/4 tablet:w-2/4 tabletbig:2/5 laptop:w-1/3 shadow-lg rounded-md bg-white">
              <div className="flex justify-end">
                <button onClick={() => setQrModal(false)}>X</button>
              </div>
              <img src={img} alt="QR Code" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
