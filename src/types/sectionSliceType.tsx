// export interface InitialStateType {
//     tasksList: Array<TaskListType>
// }

export interface InitialStateType {
    taskList: Array<TaskListType>
} 

export interface TaskListType {
    id: number,
    name: string,
    open_tasks: number,
    completed_tasks: number,
    position: number,
    is_completed: boolean,
    is_trashed: boolean,
    tasksAppended: Array<TaskType>
}

export interface TaskType {
    id: number,
    name: string,
    open_tasks: number,
    completed_tasks: number,
    position: number,
    is_completed: boolean,
    is_trashed: boolean,
    task_list_id: number,
    start_on: string | null,
    due_on: string | null,
    labels: Array<number>,
    open_subtasks: number,
    comments_count: number,
    assignee: Array<number>,
    is_important: boolean,
    labelsAppended: Array<LabelType>,
    assigneeAppended: Array<UserType>
}

export interface UserType {
    id: number,
    name: string,
    avatar_url: string
}

export interface LabelType {
    id: number,
    color: string
}