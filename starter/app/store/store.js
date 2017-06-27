import { createStore, applyMiddleware } from 'redux';
import rootReducers from 'reducers/root'
import logMiddleware from 'middleware/log'
import apiMiddleware from 'middleware/api'
const initialState = {
  recipes: [
    {
      name: 'Omelette'
    }
  ],
  ingredients: [
    {
      recipe: 'Omelette',
      name: 'Egg',
      quantity: 2
    }
  ]
}


const store = createStore(rootReducers, 
  // initialState,
  applyMiddleware(logMiddleware, apiMiddleware)
)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store