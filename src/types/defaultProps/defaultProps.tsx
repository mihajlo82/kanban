export const AddNewSectionBtnDefaultProps = {
  dispatch: () => {},
};

export const AddColumFormDefaultProp = {
  dispatch: () => {},
  setOpenModal: () => {},
};

export const AvatarDefaultProp = {
  start_on: null,
  due_on: null,
  assigneeAppended: [],
};

export const BoxBodyDefaultProp = {
  labelsAppended: [],
  comments_count: 0,
  open_subtasks: 0,
};

export const CommentCountSVGDefaultProp = {
  comments_count: 0,
};

export const labelsAppendedDefaultProp = {
  labelsAppended: [],
};

export const OpenSubtaskSVGdDefaultProp = {
  open_subtasks: 0,
};

export const BoxTitleDefaultProp = {
  name: "Unknown",
};

export const CompletedTasksDefaultProp = {
  completedTasks: [],
  deletedSection: false,
};

export const BoxSingleDefaultProp = {
  task: {
    id: Math.random() * 123456,
    name: "",
    start_on: "",
    due_on: "",
    open_subtasks: 0,
    comments_count: 0,
    is_important: false,
    labelsAppended: [],
    assigneeAppended: [],
  },
  isDraggable: false,
};

export const SingleSectionDefaultProp = {
  id: Math.ceil(Math.random() * 12346756 + 10),
  name: "NO NAME ADDED",
  open_tasks: 0,
  completed_tasks: 0,
  position: Math.ceil(Math.random() * 1000200 + 10),
  is_completed: false,
  is_trashed: false,
  tasksAppended: [],
};

export const AddTaskModalDefaultProp = {
  taskListId: Math.ceil(Math.random() * 12346756 + 10),
  setOpenAddTask: () => {},
};

export const AssingeesDefaultProp = {
  dispatchCustomReducer: () => {},
};

export const TitleColumnDefaultProp = {
  taskListItem: SingleSectionDefaultProp,
  name: "Unknown",
  tasksAppendedLength: 0,
  dispatch: () => {},
};

export const DotsMenuDefaultProp = {
  taskListItem: SingleSectionDefaultProp,
  dispatch: () => {},
};

export const DotsButtonDefaultProp = {
  setOpenMenu: () => {},
};

export const TrashSectionDefaultProp = {
  trashedVisible: true,
  setTrashedVisible: () => {},
};
