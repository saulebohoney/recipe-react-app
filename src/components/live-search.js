import React from 'react';
import SearchForm from './search-form';
import RecipesList from './recipes-list';

export default class LiveSearch extends React.Component{ 
      constructor(props) {
        super(props);
        this.state = {
          searchValue: '',
          searchRecipes:props.recipes,
        }
    }

    render(){
        return (<div>
            <SearchForm value={this.state.searchValue} handleChange={searchInput => this.setState({searchValue:searchInput})} />
            <RecipesList recipes={this.state.searchRecipes} />
        </div>
        );
    }
}

