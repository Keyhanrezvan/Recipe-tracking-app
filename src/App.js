import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipe) => [...currentRecipe, newRecipe,]);
  }

  const deleteRecipe= (id)=> {
    setRecipes((currentRecipe)=> currentRecipe.filter((recipe, index)=> id !== index))
  }
  
console.log(recipes)
  return (
    <div className="App">
      <header>
        <h1 style={{fontFamily:"Playfair Display SC", textAlign: "center", fontSize: "64px"}}>Delicious Food Recipes</h1>
      </header>
      <RecipeList deleteRecipe={deleteRecipe} recipes={recipes}/>
      <RecipeCreate saveRecipe={createRecipe} />
    </div>
  );
}

export default App;
