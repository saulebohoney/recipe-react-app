import React from 'react';

export default function Picker(props){
    return (
        <div onChange={}>
          
          What would you like to search by?
          <input type="radio" name="search" value="true"/><label>Recipe Name</label>
          <input type="radio" name="search" value="false"/><label>Ingredients</label>
            {/*<label>Search {props.label}</label>
            <input type='search' placeholder='Pizza'  onChange={(e) => props.handleChange(e.target.value)} />*/}

        </div>
    );
}
