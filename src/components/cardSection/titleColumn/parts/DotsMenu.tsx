import {
  completeTask,
  moveToTrash,
} from "../../../../redux/slices/sectionsSlice";
import { DotsMenuProp } from "../../../../types/cardSectionType";
import { DotsMenuDefaultProp } from "../../../../types/defaultProps/defaultProps";

const DotsMenu = ({ taskListItem, dispatch }: DotsMenuProp) => {
  return (
    <div className="absolute -bottom-14 w-[222px] -right-40 bg-white z-10 rounded-lg border-2	">
      <div
        className="cursor-pointer hover:bg-violet-100 p-1 w-full flex flex-start pl-5"
        onClick={() => dispatch(completeTask(taskListItem))}
      >
        Complete
      </div>
      <div
        className="cursor-pointer hover:bg-violet-100 p-1 w-full flex flex-start pl-5"
        onClick={() => dispatch(moveToTrash(taskListItem))}
      >
        Move to trash
      </div>
    </div>
  );
};

export default DotsMenu;
DotsMenu.defaultProps = DotsMenuDefaultProp;
