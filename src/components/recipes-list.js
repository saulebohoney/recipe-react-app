import React from 'react';

export default function RecipesList(props){
const recipes = props.recipes.map((recipe,index) =>
<li key ={index}>
    <strong>{recipe.name}</strong>
    <a href={recipe.originalURL}>
        {recipe.originalURL}
        </a>
    </li>
);

    return (<ul>
        {recipes}
        </ul>
    );
}

