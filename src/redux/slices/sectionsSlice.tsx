import { createSlice, current } from "@reduxjs/toolkit";
import { TaskListType, TaskType } from "../../types/sectionSliceType";
import { getAllListTasks } from "../../service/get_data";
import { getAllCompletedTasks } from "../../service/get_completed_tasks";
import { isEndDateGreaterThanStartDate } from "../../utils/date/date_validator";

const initialState = {
  taskList: getAllListTasks(),
  completedTasks: getAllCompletedTasks(),
  deletedItems: getAllListTasks().filter(
    (task) => task.is_trashed && task.tasksAppended.length > 0
  ),
  itemDragRemove: {},
};

export const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    addItemToQueueForDelete: (state = initialState, action) => {
      state.itemDragRemove = action.payload;
    },
    addListToAllTasks: (state = initialState, action) => {
      let positionTemp = 0;
      current(state.taskList).forEach((task: any) => {
        if (task.position > positionTemp) positionTemp = task.position;
      });

      const taskFinished = { ...action.payload, position: positionTemp + 1 };
      state.taskList.push(taskFinished);
    },
    addNewTask: (state = initialState, action) => {
      if(action?.payload?.name?.trim() <= 0 || action?.payload?.name?.trim() > 9999 ) return window.alert('CHECK YOUR NAME! MUST BE BW 1-9999 CHARACTERS!')
      const isEndDateGreaterThanStart = isEndDateGreaterThanStartDate(
        action?.payload?.start_on,
        action?.payload?.due_on
      );

      if (!isEndDateGreaterThanStart)
        return window.alert("END DATE MUST BE GREATER THAN START DATE!");

      state.taskList.map(
        (taskGroup) =>
          taskGroup.id === action.payload.task_list_id &&
          taskGroup.tasksAppended.push({
            ...action.payload,
            position: taskGroup.tasksAppended.length + 1,
          })
      );
    },
    completeTask: (state = initialState, action) => {
      action.payload.tasksAppended.map((task: any) =>
        state.completedTasks.push(task)
      );
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload.id
      );
    },
    moveToTrash: (state = initialState, action) => {
      action.payload.tasksAppended.map((task: any) =>
        state.deletedItems.push(task)
      );
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload.id
      );
    },
    removeTask: (state = initialState, action) => {
      let modData = [...state.taskList].map((taskColumn) => {
        if (taskColumn.id === action.payload.task_list_id) {
          const tasks = JSON.parse(JSON.stringify(taskColumn));
          let deletedTask = tasks.tasksAppended.find(
            (task: TaskType) => task.id === action.payload.id
          );
          state.deletedItems.push(deletedTask);
          return {
            ...taskColumn,
            tasksAppended: [
              ...JSON.parse(JSON.stringify(taskColumn)).tasksAppended,
            ].filter((newTask) => newTask.id !== action.payload.id),
          };
        }
        return taskColumn;
      });
      state.itemDragRemove = {};
      state.taskList = modData;
    },
  },
});

export const {
  addListToAllTasks,
  addNewTask,
  addItemToQueueForDelete,
  removeTask,
  completeTask,
  moveToTrash,
} = sectionsSlice.actions;
export default sectionsSlice.reducer;
