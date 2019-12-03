import './TodoList.css';

import React, { Component } from 'react';

import TodoListItem from 'components/TodoListItem';

const TodoList = ( { todos } ) => {

    const elements = todos.map((item) => {
        
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem { ...itemProps } />
            </li>
        )
    });

    return (
        <ul className="list-group todo-list justify-content-between">
            { elements }
        </ul>
    );
};

export default TodoList;