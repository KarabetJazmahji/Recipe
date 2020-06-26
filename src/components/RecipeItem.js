import React from 'react';
import '../App.css';


const RecipeItem = (props) =>{
    return (
      <div className="ui list">
          <div className="item">
          <div className="content">
          <div className="header">&bull;&nbsp; {props.recipe.title}</div>
          <p>{props.recipe.ingredients}</p>
          <div className="extra">
            <div className="ui right floated button">
                <a href={props.recipe.href} target='_blank'>How to make</a>
            </div>
          </div>
          </div>
          </div>
     </div>
    )
}


export default RecipeItem;