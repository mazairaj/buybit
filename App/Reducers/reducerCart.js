export function reducerCart(state =
  {cart: []}, action) {
    switch (action.type) {
    case 'ADD_CART_ITEM': 
       return { 
            ...state,
            cart: [...state.cart, action.itemObject]
        }
    case 'DELETE_CART_ITEM':
        return { 
            ...state,
            cart: state.cart.filter(item => item._id !== action.indexRemove)
        }
    case 'CART_CHECKOUT':
        return {
            cart: null
        }
    default:
        return state;
    }
}