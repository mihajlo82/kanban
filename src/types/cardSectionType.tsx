import { TaskType, UserType } from "./sectionSliceType";

export interface TaskListItemType {}

export interface TitleColumnType {
  name: String;
  tasksAppendedLength: Number;
}

export interface BoxSingleType {
  task: TaskType;
}

export interface BoxTitleType {
  name: String;
}

export interface AvatarType {
  start_on: String | null | undefined;
  due_on: String | null | undefined;
  assigneeAppended: Array<UserType>;
}
