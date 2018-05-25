export function reducerItem(state =
  {cart: null}, action) {
    switch (action.type) {
    case 'ADD_CART_ITEM': 
        return Object.assign(feedObject, state, {
            storeItems: action.newFeed
        });
    case 'DELETE_CART_ITEM':
        return Object.assign({}, state, {

        });
    case 'UPDATE_CART_ITEM':
        return Object.assign({}, state, {

        });
    case 'CART_CHECKOUT':
        return {
            cart: null
        }
    }
    default:
        return state;
    }
}