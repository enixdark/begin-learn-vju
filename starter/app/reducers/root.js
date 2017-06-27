// const reducer = (state, action) => {
//   switch(action.type){
//     case 'ADD_RECIPE':
//       return Object.assign({}.state, {
//         recipes: state.recipes.concat({ name: action.name })
//       })
//     case 'ADD_INGREDIENT':
//       const newIngredient = {
//         name: action.name,
//         recipe: action.recipe,
//         quantity: action.quantity
//       }
//       return Object.assign({}, state, {
//         ingredients: state.ingredients.concat(newIngredient)
//       })
//   }

//   return state
// }

// exports.module = reducer



import { ADD_RECIPE, ADD_INGREDIENT, SET_RECIPES } from 'constants/action-types'
import { combineReducers } from 'redux'


const recipesReducer = (recipes = [], action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return recipes.concat({ name: action.name })
    case SET_RECIPES:
      return action.recipes.recipes
  }

  return recipes
}


const ingredientsReducer = (ingredients = [], action) => {
  switch (action.type) {

    case ADD_INGREDIENT:
      const newIngredient = {
        name: action.name,
        recipe: action.recipe,
        quantity: action.quantity
      }

      return ingredients.concat(newIngredient);
  }

  return ingredients
}

const rootReducer = (state, action) => {
  return Object.assign({}, state, {
    recipes: recipesReducer(state.recipes, action),
    ingredients: ingredientsReducer(state.ingredients, action)
  });
};

export default combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer
})