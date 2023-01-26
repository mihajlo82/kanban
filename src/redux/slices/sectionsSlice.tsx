import { createSlice } from '@reduxjs/toolkit';
// import { InitialStateType, TodoItemType } from '../../types/todoSliceType';
import { InitialStateType, TaskListType } from '../../types/sectionSliceType';
import { getAllData, getAllTasks } from '../../service/get_data';

const initialState = {
   taskList: getAllData()
};

export const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    getAllTasksList: (state = initialState): any => {
       return state.taskList;
    }
  //   addTodo: (state = initialState, action) => {
  //     state.todoList.push(action.payload);
  //   },
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
export const { getAllTasksList } = sectionsSlice.actions

export default sectionsSlice.reducer;


// const todos = (state = [], action) => {
//     switch (action.type) {
//       case "ADD_TODO":
//         return [
//           ...state,
//           {
//             id: action.id,
//             complete: action.complete,
//             text: action.text
//           }
//         ];
//       case "TOGGLE_TODO":
//         return state.map(
//           todo =>
//             todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
//         );
//       default:
//         return state;
//     }
//   };
//   export default todos;