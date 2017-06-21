import React from 'react';
import SearchForm from './search-form';
import RecipesList from './recipes-list';
import Picker from './picker';

export default class LiveSearch extends React.Component{ 
      constructor(props) {
        super(props);
        this.state = {
          searchValueName: '',
          searchRecipes:props.recipes,
          mode:'name',
        }
    }

   
    render(){
        let label="Recipes";
        let tempRecipes;

        if(this.state.mode === 'ingredients')
       {
            tempRecipes = this.state.searchRecipes.filter( recipe => {
                    const innerArray = recipe.ingredients.filter( ingredient =>{
                        return ingredient.name.indexOf(this.state.searchValueName) > -1});
                    return innerArray.length > 0;
            });
            label = "Ingredients";
       }
        else{
            tempRecipes = this.state.searchRecipes.filter( recipe => {
                return recipe.name.indexOf(this.state.searchValueName) > -1;
            });
        }
        
        return (
            <div>
                <Picker handleChange={mode => this.setState({mode})}/>
                <SearchForm label={label} value={this.state.searchValueName} 
                handleChange={searchInput => this.setState({searchValueName:searchInput})} />
                <RecipesList recipes={tempRecipes} />
            </div>
           
        );
       
    }
}

