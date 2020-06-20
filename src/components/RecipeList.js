import React from 'react';
import RecipeDetail from './RecipeDetail';

const RecipeList = (props) => {
    return (
        <div className="row mt-5 pt-5">
            {(props.recipes && props.recipes.length > 0) ? 
                props.recipes.map((recipe) => (
                    <RecipeDetail key={recipe.recipe.calories} recipe={recipe} />
                )) : (<div className="no-recipes">There are no recipes to display</div>)}
        </div>
    )
}

export default RecipeList;