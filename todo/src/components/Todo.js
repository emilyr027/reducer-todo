import React, { useReducer, useState, useEffect } from 'react';
import {toDoReducer, initialState} from '../reducers/index';

const Todo = () => {
    const [state, dispatch] = useReducer(toDoReducer, initialState);
    const [newTaskText, setNewTaskText] = useState('');

    useEffect(() => {
        console.log(state);
    }, [state]);

    const handleChanges = e => {
        e.preventDefault();
        setNewTaskText(e.target.value);
    }    

    return (
        <div>
            <ul>Tasks to Accomplish Today:</ul>
                {state.map((item) => (
                    <ol className={ item.completed ? 'completed-item' : null } onClick={() => dispatch({type: "TOGGLE_TASK", payload: item.id})}>{item.task}</ol>
                ))}
            <div>
                <form>
                    <input
                    type='text'
                    name='newTaskText'
                    value={newTaskText}
                    onChange={handleChanges}
                    />                    
                </form>
                <div>
                        <button onClick={() => {
                    dispatch({type: "ADD_ITEM", payload: newTaskText})
                    }}>Add Task</button>
                    </div>
                    <div>
                        <button onClick={() => {
                            dispatch({type: "CLEAR_COMPLETED"})
                        }}>Clear Completed</button>
                    </div>

            </div>
        </div>
    );
}

export default Todo;