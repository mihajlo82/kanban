import React, { useReducer } from 'react';


const reducer = (state, action) => {
    console.log("afr");
    console.log(action);

    switch (action.type) {
        case 'NAME_TASK':
            return { ...state, name: action.payload };
        case 'START_DATE':
            return { ...state, due_on: action.payload };
        default:
            return state;
    }

}

const useAddTaskReducer = ({ taskListId }) => {
    const initialData = {
        id: 12,
        name: 'Task about nothing',
        open_tasks: 10,
        completed_tasks: 5,
        position: 6,
        is_completed: false,
        is_trashed: false,
        task_list_id: 2,
        start_on: null,
        due_on: null,
        labels: [],
        open_subtasks: 11,
        comments_count: 12,
        assignee: [],
        is_important: false,
        labelsAppended: [{ "id": 2, "color": "#F44336" }],
        assigneeAppended: []
    };
    const [stateCustomReducer, dispatchCustomReducer] = useReducer(reducer, initialData);
    return { stateCustomReducer, dispatchCustomReducer }
}

export default useAddTaskReducer