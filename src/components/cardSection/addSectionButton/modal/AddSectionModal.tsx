import { AddColumFormProp } from "../../../../types/cardSectionType";
import AddColumnForm from "./AddColumnForm";

const AddSectionModal = ({ dispatch, setOpenModal }: AddColumFormProp) => {
  return (
    <section className="w-screen fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-center mx-auto p-6">
      <div className="mt-7 bg-white rounded-xl w-[500px] h-[260px] shadow-lg dark:bg-gray-800 dark:border-gray-700 z-10 ">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Add Column
            </h1>
          </div>

          <AddColumnForm dispatch={dispatch} setOpenModal={setOpenModal} />
        </div>
      </div>

      <div
        onClick={() => setOpenModal(false)}
        className="w-screen fixed top-0 left-0 right-0 bottom-0 bg-[#616161] opacity-50"
      ></div>
    </section>
  );
};

export default AddSectionModal;
