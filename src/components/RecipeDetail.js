import React from 'react';

const RecipeDetail = (props) => {
    const recipeObj = props.recipe.recipe;
    return (
        <div className="col-md-3">
            <div className="recipe-box mb-5">
                <img src={recipeObj.image} alt={recipeObj.label} className="img-fluid" style={{borderRadius: '10px 10px 0 0'}} />
                <div className="recipe-info">
                    <span>{recipeObj.label}</span>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail;