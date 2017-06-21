import React from 'react';
import SearchForm from './search-form';
import RecipesList from './recipes-list';

export default class LiveSearch extends React.Component{ 
      constructor(props) {
        super(props);
        this.state = {
          searchValue: props.recipes,
        }
    }

    render(){
        return (<div>
            <SearchForm />
            <RecipesList recipes={this.state.searchValue} />
        </div>
        );
    }
}