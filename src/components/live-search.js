import React from 'react';
import SearchForm from './search-form';
import RecipesList from './recipes-list';

export default class LiveSearch extends React.Component{


    render(){
        return (<div>
            <SearchForm />
            <RecipesList />
        </div>
        );
    }
}