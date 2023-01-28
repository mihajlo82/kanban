import { createSlice, current  } from '@reduxjs/toolkit';
// import { InitialStateType, TodoItemType } from '../../types/todoSliceType';
import { InitialStateType, TaskListType, TaskType } from '../../types/sectionSliceType';
import {  getAllTasks, getAllListTasks } from '../../service/get_data';
import { getAllCompletedTasks} from '../../service/get_completed_tasks';

const initialState = {
   taskList: getAllListTasks(),
   completedTasks: getAllCompletedTasks(),
   deletedItems: getAllListTasks().filter(task => task.is_trashed),
   itemDragRemove: {},
};

export const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    getAllTasksList: (state = initialState): any => {
       return state.taskList;
    },
    addItemToQueueForDelete: (state = initialState, action) => { 
        state.itemDragRemove = action.payload
    },
    addListToAllTasks: (state = initialState, action) => { 
      state.taskList.push(action.payload);
    },
    addNewTask: (state = initialState, action) => {  
        state.taskList.map(taskGroup => taskGroup.id === action.payload.task_list_id && taskGroup.tasksAppended.push(action.payload));
    }, 
    completeTask: (state = initialState, action) => { 
      action.payload.tasksAppended.map((task: any) => state.completedTasks.push(task)); 
      state.taskList = state.taskList.filter(task => task.id !== action.payload.id);
    },
    removeTask: (state = initialState, action) => {  
      let modData = [...state.taskList].map(taskColumn => {
        if(taskColumn.id === action.payload.task_list_id){
            const tasks =JSON.parse(JSON.stringify(taskColumn));
            let deletedTask = tasks.tasksAppended.find((task:TaskType) => task.id === action.payload.id);
         //   const makeIncompleteDeletedTask = {...deletedTask, is_completed: false};
            state.deletedItems.push(deletedTask);
            return {...taskColumn, tasksAppended: [...JSON.parse(JSON.stringify(taskColumn)).tasksAppended].filter(newTask => newTask.id !== action.payload.id)};
          } 
          return taskColumn;
      });
      state.itemDragRemove={};
      state.taskList = modData;
  }
}
})

export const { getAllTasksList, addListToAllTasks, addNewTask, addItemToQueueForDelete, removeTask,completeTask } = sectionsSlice.actions
export default sectionsSlice.reducer;
