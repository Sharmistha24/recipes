import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../../store/actions/recipeActions'
 import { Redirect } from 'react-router-dom';

class Create extends Component {
     state = {
        name:'',
        ingredients:''

     }

   handleChange = (e) =>{
       this.setState({
           [e.target.id]: e.target.value
       })
   } 
   
   handleSubmit = (e) =>{
      e.preventDefault();
     this.props.createRecipe(this.state)
     this.props.history.push('/');
   }

  render() {
    // const{ auth } = this.props;
    // if(auth.uid) return <Redirect to='/create' />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
        <h4 className="grey-text text-darken-3">Create New recipe</h4>
        <div className="input-field">
        <label htmlFor="name">Recipe Name</label>
        <input type="text" id="name" onChange={this.handleChange}/>

        </div>
        <div className="input-field">
        <label htmlFor="ingredients">Ingredients</label>
        <textarea name="ingredients" id="ingredients"  className="materialize-textarea" onChange={this.handleChange}/>

        </div>
        <div className="input-field">
        <button className="btn pink lighten-1">Create Recipe</button>
        </div>
        </form>
      </div>
    )
  }
}


// const mapStateToProps = (state)=>{
//   return{
//     auth: state.firebase.auth
//   }
// }

const mapDispatchToProps = (dispatch) =>{
  return {
  createRecipe: (recipe) => dispatch( createRecipe(recipe)),
  
  }
}

export default connect(null, mapDispatchToProps)(Create);