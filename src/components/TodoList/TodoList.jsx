import './TodoList.css';

import React, { Component } from 'react';

import TodoListItem from 'components/TodoListItem';

const TodoList = () => {

    const items = ['Drink Coffee', 'Build Awesome App'];
    return (
        <ul>
            <li>Create new React App</li>
            <li>Todo something</li>
            <li><TodoListItem /></li>
        </ul>
    );
};

export default TodoList;