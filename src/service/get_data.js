import ALL_DATA from '../data/data.json';

let tasksListInit = ALL_DATA.task_lists.sort((a, b) => a.position - b.position);//.filter(task => !task.is_completed && !task.is_trashed);
export const allLabelsInit = ALL_DATA.labels;
let allTasks = ALL_DATA.tasks.sort((a, b) => a.position - b.position);
export const allUsers = ALL_DATA.users;

export const getAllListTasks = () => {
    const newData = tasksListInit.map(item => {
        const tasksInsideTaskList = appendTasksToTaskListById(item.id);
        return { ...item, tasksAppended: tasksInsideTaskList };
    });
    return newData;
}

export const getAllTasks = () => {
    const modifiedTasks = allTasks.map(item => {
        const allLabelsInside = appendLabelsToTasks(item.labels);
        const allUsersInside = appendUsersToTasks(item.assignee);

        return { ...item, labelsAppended: allLabelsInside, assigneeAppended: allUsersInside }
    });
    return modifiedTasks;
}

const appendTasksToTaskListById = id => getAllTasks().filter(task => task.task_list_id === id);

const appendLabelsToTasks = (listLabelsArray = []) => allLabelsInit.filter(item => listLabelsArray.includes(item.id));

const appendUsersToTasks = (usersArray = []) => allUsers.filter(user => usersArray.includes(user.id));
