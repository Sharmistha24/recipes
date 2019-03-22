import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import {Link } from 'react-router-dom';
import { removeRecipe } from '../../store/actions/recipeActions'

//import { auth, firestore } from 'global/firebase';


// const handleDelete = (id, ) =>{
//   console.log("delete", id)
// }

class Details extends React.Component {

  handleDelete = (id, coll ) =>{
    console.log("delete", id)
    // this.props.deleteRecipe(id)
    // return firestore.collection(coll).doc(id).delete();
  }

  render(){
    let id = this.props.id
    console.log("id", this.props.id)
   const { recipe } = this.props;
   if (recipe){
  
      return(
    <div className="container section details">
    <div className="card z-depth-0">
      <div className="card-content">
         <span className="card-title">{ recipe.name }</span>
         <p>{ recipe.ingredients }</p>
      </div>
    <div className="card-action gret lighten-4 grey-text">
    <Link to={'/edit/' + recipe.id}  key={recipe.id}><button className="btn blue lighten-1">Edit</button></Link>
    <button className="btn red lighten-1" style={{marginLeft:30}} onClick={() =>this.handleDelete(id)}>Delete</button>
      {/* <div>{ recipe.authorFullName }</div> */}
    </div>
  </div>
  </div>
  )
   }else {
      return (
      <div className="container center">
      <p>Loading Recipe...</p>
      </div>
      )
    }

  }
}



const mapStateToProps = (state, ownProps) =>{
  const id = ownProps.match.params.id;
  const recipes = state.firestore.data.recipes;
  const recipe = recipes ? recipes[id] : null
  return{
   recipe: recipe,
   id:id,

  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    removeRecipe: (id) => dispatch( removeRecipe(id)),
  
  }
}
export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(Details);
