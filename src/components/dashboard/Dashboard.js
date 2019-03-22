import React ,  { Component } from 'react';
// import { Link } from 'react-router-dom';
import List from '../recipes/List';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import '../../App.css'

class Dashboard extends Component {
    render(){
     const { recipes } = this.props;
      return (
         <div className=" dashboard container">
         <div className="row">
         <div className="col-md-12">
         <List recipes={recipes} />
         </div>
         </div>
         </div>

      )  
    }
}


const mapStateToProps = (state) => {
  console.log(state)
  return{
    recipes: state.firestore.ordered.recipes
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
) (Dashboard);