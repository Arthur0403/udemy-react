
import './SearchPanel.css';

import React, { Component } from 'react';

const SearchPanel = () => {
    const searchTetx = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };
    return (
        <input style={ searchStyle } placeholder={searchTetx} className="search-input form-control" />
    );
};

export default SearchPanel;