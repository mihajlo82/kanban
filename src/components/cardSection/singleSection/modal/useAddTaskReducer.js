import  { useReducer } from 'react';

const reducer = (state, action) => { 

    switch (action.type) {
        case 'NAME_TASK':
            return { ...state, name: action.name };
        case 'START_DATE':
            return { ...state, start_on: action.start_on };
        case 'END_DATE':
            return { ...state, due_on: action.due_on };
        case 'ADD_LABEL':
            return { ...state, labelsAppended: [...state.labelsAppended, action.label]};
        case 'ADD_ASSIGNEES':
            console.log('addd ssignes');
            console.log(action);
            return {...state, assigneeAppended: [...state.assigneeAppended, action.assignee]};
        default:
            return state;
    }

}

const useAddTaskReducer = ({ taskListId }) => {

    const initialData = {
        id: 12,
        name: '',
        open_tasks: 0,
        completed_tasks: 0,
        position: 6,
        is_completed: false,
        is_trashed: false,
        task_list_id: taskListId,
        start_on: null,
        due_on: null,
        labels: [],
        open_subtasks: 0,
        comments_count: 0,
        assignee: [],
        is_important: false,
        labelsAppended: [],
        assigneeAppended: []
    };

    const [stateCustomReducer, dispatchCustomReducer] = useReducer(reducer, initialData);
    return { stateCustomReducer, dispatchCustomReducer }
}

export default useAddTaskReducer