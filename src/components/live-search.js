import React from 'react';
import SearchForm from './search-form';
import RecipesList from './recipes-list';
import Picker from './picker';

export default class LiveSearch extends React.Component{ 
      constructor(props) {
        super(props);
        this.state = {
          searchValueName: '',
          searchValueIngredients: '',
          searchRecipes:props.recipes,
          ingredients:'false',
        }
    }

    render(){

        // let temp;
  
        // if(this.state.ingredients)
        // {
        //     temp = this.state.searchRecipes;
        // }
        // else{

           
        // }

        const tempRecipes1 = this.state.searchRecipes.filter( recipe => {
                return recipe.name.indexOf(this.state.searchValueName) > -1;
            });

        const tempRecipes2 = this.state.searchRecipes.filter( recipe => {
                    const innerArray = recipe.ingredients.filter( ingredient =>{
                        return ingredient.name.indexOf(this.state.searchValueIngredients) > -1});
                    return innerArray.length > 0;
            });

        return (<div>
            <SearchForm label="Recipe" value={this.state.searchValueName} 
            handleChange={searchInput => this.setState({searchValueName:searchInput})} />
            <RecipesList recipes={tempRecipes1} />
            <SearchForm label="Ingredients" value={this.state.searchValueIngredients} 
            handleChange={searchInput2 => this.setState({searchValueIngredients:searchInput2})} />
            <RecipesList recipes={tempRecipes2} />

            <Picker/>

            {/*<label="Recipe" value={this.state.searchValueName} 
            handleChange={searchInput => this.setState({searchValueName:searchInput})} />
            <RecipesList recipes={tempRecipes1} />*/}
        </div>
        );
    }
}

