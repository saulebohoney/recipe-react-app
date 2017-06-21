import React from 'react';

export default function SearchForm(props){
    return (
        <form>
            <label>Search {props.label}</label>
            <input type='search' placeholder='Pizza'  onChange={(e) => props.handleChange(e.target.value)} />

        </form>
    );
}
