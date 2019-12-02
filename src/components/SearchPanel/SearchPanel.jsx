
import './SearchPanel.css';

import React, { Component } from 'react';

const SearchPanel = () => {
    const searchTetx = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };
    return (
        <input style={ searchStyle } placeholder={searchTetx} />
    );
};

export default SearchPanel;