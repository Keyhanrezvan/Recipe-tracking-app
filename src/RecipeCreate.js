import React, { useState } from "react";
// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
// TODO: Add the required input and textarea form elements.
// TODO: Add the required submit and change handlers
function RecipeCreate({ saveRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setForm] = useState( initialFormState );

  const submitHandler=(event)=> {
    event.preventDefault();
    saveRecipe(formData);
    setForm({initialFormState});
  }

  const changeHandler= ({target}) => {
    setForm({...formData, [target.name]:target.value})
  }

  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"></label>
              <input style={{width:"99%"}}
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={changeHandler}
                value={formData.name}
              />
            </td>
            <td>
              <label htmlFor="cuisine"></label>
              <input style={{width:"99%"}}
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                onChange={changeHandler}
                value={formData.cuisine}
              />
            </td>
            <td>
              <label htmlFor="photo"></label>
              <input style={{width:"99%"}}
                id="photo"
                name="photo"
                type="url"
                placeholder="Photo"
                onChange={changeHandler}
                value={formData.photo}
              />
            </td>
            <td>
              <label htmlFor="ingredients"></label>
              <textarea style={{width:"99%"}}
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                onChange={changeHandler}
                value={formData.ingredients}
              />
            </td>
            <td>
              <label htmlFor="preparation"></label>
              <textarea style={{width:"99%"}}
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                onChange={changeHandler}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
