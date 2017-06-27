import 'normalize.css/normalize.css'
import 'assets/stylesheets/main.css'
import store from './store/store'
import { addRecipe, fetchRecipes } from './actions/recipes'
import { addIngredient } from './actions/ingredients'
import loadUI from 'ui/jquery/index';

// store.dispatch(addRecipe('Pancake'))
// store.dispatch(addIngredient('Pancake', 'Eggs', 3))

loadUI()
store.dispatch(fetchRecipes());

window.store = store