import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = (props) =>{
    
return <div style={{maxWidth: '600px', margin: "20px auto"}}>{props.recipes.map((recipe)=>{
    return <RecipeItem recipe={recipe}></RecipeItem>
   })}</div>;
};



export default RecipeList;