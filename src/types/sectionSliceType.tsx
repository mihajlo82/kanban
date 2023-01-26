// export interface InitialStateType {
//     tasksList: Array<TaskListType>
// }

export interface InitialStateType {
    taskList: Array<TaskListType>
} 

export interface TaskListType {
    id: Number,
    name: String,
    open_tasks: Number,
    completed_tasks: Number,
    position: Number,
    is_completed: Boolean,
    is_trashed: Boolean,
    tasksAppended: Array<TaskType>
}

export interface TaskType {
    id: Number,
    name: String,
    open_tasks: Number,
    completed_tasks: Number,
    position: Number,
    is_completed: Boolean,
    is_trashed: Boolean,
    task_list_id: Number,
    start_on: String | null,
    due_on: String | null,
    labels: Array<Number>,
    open_subtasks: Number,
    comments_count: Number,
    assignee: Array<Number>,
    is_important: Boolean,
    labelsAppended: Array<LabelType>,
    assigneeAppended: Array<UserType>
}

export interface UserType {
    id: Number,
    name: string,
    avatar_url: string
}

export interface LabelType {
    id: Number,
    color: String
}