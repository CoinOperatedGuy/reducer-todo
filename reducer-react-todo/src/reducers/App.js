export const initialState = {
    todo: 'Write ToDo Item Here...',
    editing: false
};

export const toDoReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_TODO':
            return { ...state, todo: action.payload, editing: false };
        case 'CHANGE_EDIT':
            return { ...state, editing: true };
        default:
            return state;
    }
};
