export function reducerLogin(state =
  {loading: false, loggedIn: false, error: null, skip: false, userProfile: null}, action) {
    switch (action.type) {
    case 'LOADING':
        return Object.assign({}, state, {
            loading: true,
        });
    case 'LOGIN':
        return Object.assign({}, state, {
            loggedIn: true,
            loading: false,
            error: null,
            userProfile: action.userObject
        });
    case 'USER_UPDATE':
        return Object.assign({}, state, {
            userProfile: action.userObject
        });   
    case 'LOGOUT':
        return Object.assign({}, state, {
            loading: false,
            loggedIn: false,
            error: null,
            userProfile: null
        });
    case 'ERROR': 
        return Object.assign({}, state, {
            loading: false,
            error: action.err
        });
    case 'USER_ITEMLIST_UPDATE':
        const newState = { ...state };
        newState.userProfile.mySellingItem.push(action.itemID)
        return newState  
    default:
        return state;
    }
}