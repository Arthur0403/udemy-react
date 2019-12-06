import './ItemAddForm.css';

import React, { Component } from 'react';

export default class ItemAddForm extends Component {

    state = {
        lebel: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
    };
   
    render() { 
        return (
            <form className="item-add-form d-flex justify-content-between"
                onSubmit={this.onSubmit}>
                <input type="text" className="form-control" onChange={ this.onLabelChange } placeholder="What does to be done" />
                <button 
                className="btn btn-outline-secondary">
                    Add Item
                </button>
            </form>
        )
    }
}
