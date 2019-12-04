
import './App.css';

import React, { Component } from 'react';

import TodoList from 'components/TodoList';
import AppHeader from 'components/AppHeader';
import SearchPanel from 'components/SearchPanel';
import ItemStatusFilter from 'components/ItemStatusFilter';
import ItemAddForm from 'components/ItemAddForm';


export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Make Awesome App')
        ]
    };

    createTodoItem(label){
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx), 
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }
        })
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            }
        });
    };

    onToggleImportant = (id) => {
        console.log('Toggle Important', id);
    };

    onToggleDone = (id) => {
        console.log('Toggle Done', id);
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={this.state.todoData}
                onDeleted={this.deleteItem} 
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}/>

                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    }
}