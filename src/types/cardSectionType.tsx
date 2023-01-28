import { LabelType, TaskListType, TaskType, UserType } from "./sectionSliceType";

export interface TitleColumnType {
  name: string | '',
  tasksAppendedLength: number | 0,
  taskListItem?: TaskListType,
  dispatch?: any
}

export interface BoxSingleType {
  task: TaskType,
  isDraggable: boolean
}

export interface BoxTitleType {
  name: string;
}

export interface AvatarType {
  start_on: string | null | undefined;
  due_on: string | null | undefined;
  assigneeAppended: Array<UserType>;
}

export interface BoxBodyProp {
  labelsAppended: Array<LabelType>,
  comments_count: number,
  open_subtasks: number
}

export interface CompletedTasksProp {
  completedTasks: Array<TaskType>,
  deletedSection: boolean,
  
}
