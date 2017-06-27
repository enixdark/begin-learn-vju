import { FETCH_RECIPES } from 'constants/action-types'
import { setRecipes } from 'actions/recipes'
import axios from 'axios'
const URL = 'https://s3.amazonaws.com/500tech-shared/db.json'

function fetchData(url, callback) {
  fetch(url, { mode: 'cors' }).then((response) =>{
    if(response.status != 200){
      console.log(`Error fetching recipes: ${ response.status }`);
    }
    else {
      response.json().then(callback)
    }
  }).catch((err) => console.log(`Error fetching recipes: ${ err }`))
}

const apiMiddleware = ({dispatch}) => next => action => {
  if(action.type == FETCH_RECIPES){
    fetchData(URL, data => dispatch(setRecipes(data)))
  }
  next(action)
}

export default apiMiddleware