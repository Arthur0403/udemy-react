
import './SearchPanel.css';

import React, { Component } from 'react';

export default class SearchPanel extends Component {
    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };
    
    render(){
        const searchTetx = 'Type here to search';
        const searchStyle = {
        fontSize: '20px'
    };
    return (
        <input style={ searchStyle } placeholder={searchTetx} className="search-input form-control" value={this.state.term} onChange={this.onSearchChange} />
    );
    }
};