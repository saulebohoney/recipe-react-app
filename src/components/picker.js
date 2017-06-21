import React from 'react';

export default function Picker(props){
    return (
        <div onChange={(e) => props.handleChange(e.target.value)}>
          
          What would you like to search by?
          <input type="radio" name="search" value="name"/><label>Recipe Name</label>
          <input type="radio" name="search" value="ingredients"/><label>Ingredients</label>
            {/*<label>Search {props.label}</label>
            <input type='search' placeholder='Pizza'  onChange={(e) => props.handleChange(e.target.value)} />*/}

        </div>
    );
}
