import React from 'react';


const Summary = ({recipe}) =>{
    return(
        <div className="card z-depth-0 summary">
        <div className="card-content grey-text text-darken-3">
        <span className="card-title">{recipe.name}</span>
        {/* <p>posted by {recipe.authorFullName}</p> */}
        
        </div>
        </div>
    )
}

export default Summary;