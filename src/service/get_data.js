import ALL_DATA from  '../data/data.json';

let tasksListInit = ALL_DATA.task_lists.sort((a,b)=> a.position - b.position);
let allLabelsInit = ALL_DATA.labels;
let allTasks = ALL_DATA.tasks.sort((a,b)=> a.position - b.position);
let allUsers = ALL_DATA.users;
// export const getAllData = () => tasksListInit.map(item => {...item});


export const getAllData = () => {
    let newData = tasksListInit.map(item => {
        let tasksInsideTaskList = appendTasksToTaskListById(item.id);
        return {...item, tasksAppended: tasksInsideTaskList};
    }); 
    return newData;
}

export const getAllTasks = () => {
    let modifiedTasks = allTasks.map(item => {
        let allLabelsInside = appendLabelsToTasks(item.labels);
        let allUsersInside = appendUsersToTasks(item.assignee); 
        
       return {
          ...item,
          labelsAppended: allLabelsInside,
          assigneeAppended: allUsersInside 
        }
    }); 
    return modifiedTasks;
}

const appendTasksToTaskListById = id => getAllTasks().filter(task => task.task_list_id === id);

const appendLabelsToTasks = (listLabelsArray=[]) => allLabelsInit.filter(item => listLabelsArray.includes(item.id));

const appendUsersToTasks = (usersArray=[]) => allUsers.filter(user => usersArray.includes(user.id));
