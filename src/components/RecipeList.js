import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = (props) =>{
    
return <div>{props.recipes.map((recipe)=>{
    return <RecipeItem recipe={recipe}></RecipeItem>
   })}</div>;
};



export default RecipeList;