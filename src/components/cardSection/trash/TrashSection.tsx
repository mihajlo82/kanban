import { removeTask } from "../../../redux/slices/sectionsSlice";
import { useSelector, useDispatch } from "react-redux";
import { StateTypes } from "../../../types/reducerType";
import { BsFillTrashFill } from "react-icons/bs";
import { TrashedProp } from "../../../types/cardSectionType";

const TrashSection = ({ trashedVisible, setTrashedVisible }: TrashedProp) => {
  const itemForDelete = useSelector(
    (state: StateTypes) => state.sections.itemDragRemove
  );
  const dispatch = useDispatch();
  const allowDrop = (e: any) => e.preventDefault();

  const deleteItem = () => dispatch(removeTask(itemForDelete));
  return (
    <div className="fixed bottom-10 right-10 flex items-center">
      <div>
        <div className="mr-2 p-2 rounded text-[white] text-md bg-[#a8a8a8] font-bold">
          Drag item to trash can for deleting
        </div>

        <button
          className="bg-[white] p-2 font-bold rounded mt-1 text-md"
          type="button"
          onClick={() => setTrashedVisible((prev) => !prev)}
        >
          {trashedVisible ? "Hide" : "Show"} trashed section
        </button>
      </div>
      <div
        onDragOver={allowDrop}
        onDrop={deleteItem}
        className="p-5 rounded-md bg-[white]"
      >
        <BsFillTrashFill className="text-[#ff1100] w-[40px] h-[45px]" />
      </div>
    </div>
  );
};

export default TrashSection;
