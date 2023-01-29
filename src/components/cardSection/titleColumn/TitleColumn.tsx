import { useState } from "react";
import { TitleColumnType } from "../../../types/cardSectionType";
import { completeTask, moveToTrash } from "../../../redux/slices/sectionsSlice";
import { COMPLETED, TRASHED } from "../../../constants/names";
import DotsButton from "./parts/DotsButton";
import DotsMenu from "./parts/DotsMenu";

const TitleColumn = ({
  taskListItem,
  name,
  tasksAppendedLength,
  dispatch,
}: TitleColumnType) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="flex items-center flex-shrink-0 h-10 px-2 w-[273px] relative" onMouseLeave={()=> setOpenMenu(false)}>
      <span className="block text-sm font-semibold">

        {name} - ({tasksAppendedLength})
      </span>

      {name !== TRASHED && name !== COMPLETED && (
        <DotsButton setOpenMenu={setOpenMenu} />
      )}

      {openMenu && name !== TRASHED && name !== COMPLETED && (
        <DotsMenu taskListItem={taskListItem} dispatch={dispatch} />
      )}
    </div>
  );
};

export default TitleColumn;
