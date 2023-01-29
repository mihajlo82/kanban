import { useState } from "react";
import AddSectionModal from "./modal/AddSectionModal";

const AddNewSectionBtn = ({ dispatch }: any) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="p-0 flex h-[35px] w-[60px]">
      <button
        type="button"
        className="m-0 p-0 pb-1 drop-shadow-lg bg-white text-2xl font-bold flex justify-center items-center w-[60px] h-[35px] rounded-md mb-1"
        onClick={() => setOpenModal((prev) => !prev)}
      >
        +
      </button>

      {openModal && (
        <AddSectionModal dispatch={dispatch} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

export default AddNewSectionBtn;
