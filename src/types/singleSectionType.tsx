import { TaskListType } from "./sectionSliceType";
export interface SingleSectionProp {
  taskListItem: TaskListType;
}

export interface AddTaskModalProp {
  taskListId: string | number;
  setOpenAddTask: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AssigneeProp {
  dispatchCustomReducer: React.DispatchWithoutAction;
}

export interface FormAddTaskProp {
  taskListId: string | number;
  setOpenAddTask: React.Dispatch<React.SetStateAction<boolean>>;
}
