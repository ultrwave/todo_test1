import React from 'react';
import './App.css';
import {TodoList} from './TodoList';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterType = 'active' | 'inactive' | 'all'

export type TodoListType = {
    id: string
    title: string
    filter: FilterType
}

export type TasksForTodolistType = {
    [id: string]: Array<TaskType>
}

function App() {

    //BLL

    const tasks: Array<TaskType> = [
        {id: '1', title: 'Exercise', isDone: false},
        {id: '2', title: 'Party', isDone: false},
        {id: '3', title: 'Sleep', isDone: false},
        {id: '4', title: 'Feed the cat', isDone: false},
    ]

    const todolist: TodoListType = {id: 'todolist_1', title: 'What to do?', filter: 'all'}


    return (
        <div className="App">
            <TodoList/>
        </div>
    );
}

export default App;
