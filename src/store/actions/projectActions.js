export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make asynchronous call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            FirstName: 'Roy',
            LastName: 'Hiroshi',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type:'CREATE_PROJECT', project });    
        }).catch((err)=>{
            dispatch({type: 'CREATE-PROJECT_ERROR', err});
        })
        
    }
};
