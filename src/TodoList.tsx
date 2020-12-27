import React from 'react';
import './App.css';

export type TodoListPropsType = {

}


export function TodoList(props: TodoListPropsType) {

    return (
        <div className='todoList'>
            <h3>Things to do:</h3>
            <div>
                <input className='input'/>
                <button className='addTaskButton'>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={true}/> <span>Study</span></li>
                <li><input type="checkbox" checked={true}/> <span>Eat</span></li>
                <li><input type="checkbox" checked={false}/> <span>Sleep</span></li>
            </ul>
            <div className='fButtons'>
                <button className='filterButton'>All</button>
                <button className='filterButton'>Active</button>
                <button className='filterButton'>Completed</button>
            </div>
        </div>
    )
}