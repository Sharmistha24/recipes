const initState = {
    recipes: [
        {id:'1', name: 'pizza', ingredients:'bread, butter, onion'},
        {id:'2', name: 'pizza2', ingredients:'bread, butter, onion'}
    ],
    recipeDeleteLoading: false
}


const recipeReducer = (state = initState , action) => {
    console.log("reducer id",action.id)
  switch(action.type) {
      case 'CREATE_RECIPE' :
      console.log('created recipe', action.recipe);
      return state;
      case 'CREATE_RECIPE_ERROR':
      console.log('create recipeerror', action.err);
      return state;
      case 'EDIT_RECIPE' :
      console.log('Edit recipe', action.recipe);
      return state;
      case 'EDIT_RECIPE_ERROR':
      console.log('Edit recipe error', action.err);
      return state;
      case 'DELETE_RECIPE_SUCCESS': 
      console.log('delete recipe success');
        return {
            ...state,
            recipes: state.recipes.filter(x => x.key !== action.key),
            recipeDeleteLoading: false
        }
      case 'DELETE_RECIPE_LOADING': 
      console.log('delete recipe loading');
        return {
            ...state,
            recipeDeleteLoading: true
        }
      case 'DELETE_RECIPE_ERROR': 
      console.log('delete recipe error');
        return {
            ...state,
            recipeDeleteLoading: false
        }
    
      default:
      return state;
  }

   
}

export default recipeReducer;