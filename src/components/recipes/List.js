import React from 'react';
import Summary from './Summary';
import {Link } from 'react-router-dom';

const List = ({recipes})=>{
    return (
        <div className="list section">
       { recipes && recipes.map(recipe => {
           return (
               <Link to={'/recipe/' + recipe.id}  key={recipe.id}>
               <Summary recipe={recipe} />
           
              </Link>
           )
        
       })}
        </div>

        




    )
}


export default List;