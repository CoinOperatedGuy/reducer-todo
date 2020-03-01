import React, { useState, useReducer } from 'react';
import { initialState, toDoReducer } from '../reducers';

export const ToDo = () => {
    const [newToDoText, setNewToDoText] = useState('');
    const [state, dispatch] = useReducer(toDoReducer, initialState);
    console.log(state);

    const handleChanges = e => {
        setNewToDoText(e.target.value);
    };

    const editToDo = e => {
        dispatch({ type: 'CHANGE_EDIT' });

    const changeToDo = e => {
        dispatch({ type: 'CHANGE_TODO', payload: newToDoText });
    };

    return (
        <div>
            {state.editing ? (
                <div>
                    <input
                        className='todo-input'
                        name='newToDoText'
                        value={newToDoText}
                        onChange={handleChanges}
                    />
                    <button onClick={changeToDo}>Update ToDo</button>
                </div>
            ) : (
                <h1>
                    {state.title} <i className='far fa-edit' onClick={editToDo} />
                </h1>
            )}
        </div>
    );
};