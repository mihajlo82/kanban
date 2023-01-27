import { createSlice } from '@reduxjs/toolkit';
// import { InitialStateType, TodoItemType } from '../../types/todoSliceType';
import { InitialStateType, TaskListType } from '../../types/sectionSliceType';
import { getAllData, getAllTasks } from '../../service/get_data';
import { getAllCompletedTasks } from '../../service/get_completed_tasks';

const initialState = {
   taskList: getAllData(),
   completedTasks: getAllCompletedTasks()
};

export const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    getAllTasksList: (state = initialState): any => {
       return state.taskList;
    },
    addListToAllTasks: (state = initialState, action) => { 
      state.taskList.push(action.payload);
    },
    addNewTask: (state = initialState, action) => {  
          state.taskList.map(taskGroup => taskGroup.id === action.payload.task_list_id && taskGroup.tasksAppended.push(action.payload));
    }
  //   removeTodo: (state = initialState, action) => {
  //     state.todoList = state.todoList.filter(x => x.id !== action.payload);
  //   },
  //   editTodo: (state = initialState, action) => {
  //     let itemTemp = state.todoList.map(listItem => {
  //       if (listItem.id === action.payload.id) {
  //         let listItemCopy = { ...listItem };
  //         listItemCopy.name = action.payload.value;
  //         return listItemCopy;
  //       }
  //       return listItem;
  //     });
  //     state.todoList = itemTemp;
  //   }
   }
})

// Action creators are generated for each case reducer function
export const { getAllTasksList, addListToAllTasks, addNewTask } = sectionsSlice.actions

export default sectionsSlice.reducer;
