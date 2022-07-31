import { useState } from "react";
import More from "../../../../assets/More.svg";
import { ModalDataTableView } from "./ModalDataTableView";

export const DataTableView = () => {
  const [modalData, setModalData] = useState(false);

  return (
    <>
      <div className="py-3 ml-4 w-full pl-8">
        <div className="flex flex-row justify-between">
          <p className="text-sm">37923899796009016519001</p>

          <p className="text-sm">Kessler Torres</p>

          <p className="text-sm">Admisión general</p>

          <p className="text-sm">Gratis</p>

          <div
            onClick={() => {
              setModalData(!modalData);
            }}
            className="-mt-2 cursor-pointer hover:rounded-full hover:bg-gray-100 px-5 py-3"
          >
            <img className="" src={More} alt="More" />
          </div>
        </div>
      </div>
      <ModalDataTableView modalData={modalData} />
    </>
  );
};
