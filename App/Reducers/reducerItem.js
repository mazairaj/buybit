export function reducerItem(state =
  {myStoreItem: null, myPurchasedItem: null, storeItems: null, exchangeRate: null, err: null}, action) {
    switch (action.type) {
    case 'STORE_LOOKUP':
        return Object.assign({}, state, {
            storeItems: action.storeItems
        });
    case 'MY_PURCHASE_ITEM':
        return Object.assign({}, state, {
            myPurchasedItem: action.myPurchasedItem
        });
    case "ADD_MY_PURCHASE_ITEM"
        return { 
            ...state,
            myPurchasedItem: [...state.myPurchasedItem, action.myPurchasedItem]
        }
    case 'MY_STORE_ITEM':
        return Object.assign({}, state, {
            myStoreItem: action.myStoreItem
        });
    case 'ADD_MY_STORE_ITEM': 
        return { 
            ...state,
            myStoreItem: [...state.myStoreItem, action.itemObject]
        }
    case 'DELETE_MY_STORE_ITEM':
        return {
            state
        }
    case 'UPDATE_MY_STORE_ITEM':
        return {
            state
        }
    case 'ITEM_PURCHASE':
        return {
            ...state,
            storeItems: {
                ...state.myPosts,
                isItemSold: true,
                timeofSold: action.timeofSold
            }
        }
    case 'EXCHANGE_RATE': 
        return Object.assign({}, state, {
            exchangeRate: action.exchangeRate
        });
    default:
        return state;
    }
}