import firebase from '../../config/firebaseConfig';


export const createRecipe = (recipe) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        //const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('recipes').add({
           ...recipe,
        //    authorFullName: profile.FullName,
           authorId: authorId,
           createdAt: new Date()
        }).then(()=>{
            dispatch({ type: 'CREATE_RECIPE', recipe});
        }).catch((err)=> {
            dispatch({type: 'CREATE_RECIPE_ERROR', err});
        })
       
    }
}

export const updateRecipe = (recipe,id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('recipes').doc(id).update({
           ...recipe,
        //    authorFullName: profile.FullName,
           authorId: authorId,
           updatedAt: new Date()
        }).then(()=>{
            dispatch({ type: 'UPDATE_RECIPE', recipe});
        }).catch((err)=> {
            dispatch({type: 'UPDATE_RECIPE_ERROR', err});
        })
       
    }
}





export const deleteRecipe = (recipe) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('recipes').delete({
            ...recipe,
     
         }).then(()=>{
             dispatch({ type: 'DELETE_RECIPE', recipe});
         }).catch((err)=> {
             dispatch({type: 'DELETE_RECIPE_ERROR', err});
         })
        

    };
}

export const _removeRecipe = ( id ) => ({
    type: 'DELETE RECIPE',
    id
});
 
export const removeRecipe = (id) => {
    console.log("id from action . recipes", id)
   
    return (dispatch, getState, { getFirebase, getFirestore }) => {
       
        firebase.firestore().collection('recipes').doc(`id`).delete()

        .then(()=>{
            // dispatch({ type: _removeRecipe, id});
            dispatch(_removeRecipe( id ));
        }).catch((err)=> {
            dispatch({type: 'DELETE_RECIPE_ERROR', err});
        })
       
    }
};