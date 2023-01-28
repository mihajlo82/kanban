import { TaskListType, TaskType } from "./sectionSliceType"

export interface ReducerType {
    state: StateTypes 
} 

export interface StateTypes {
    sections: StateSubTypes  
}

export interface StateSubTypes {
    taskList: Array<TaskListType>,
    completedTasks: Array<TaskType>,
    itemDragRemove: TaskType,
    deletedItems: Array<TaskType>

}