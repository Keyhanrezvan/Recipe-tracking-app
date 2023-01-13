import React, { useState } from "react";

function RecipeView ({recipeInfo, deleteRecipe }) {

return (
    <tr className="">
        <td>
            {recipeInfo.name}
        </td>
        <td>
            {recipeInfo.cuisine}
        </td>
        <td>
            <img style={{objectFit: "scale-down", width:"100%", height:"100%"}}src={recipeInfo.photo}/>
        </td>
        <td className="content_td">
           <p>{(recipeInfo.ingredients)}</p>
        </td>
        <td className="content_td">
            <p>{(recipeInfo.preparation)}</p>
        </td>
        <td>
        <button name="delete" onClick={deleteRecipe}>Delete</button>
        </td>
    </tr>
    
)
}

export default RecipeView;