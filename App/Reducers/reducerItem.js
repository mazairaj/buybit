export function reducerItem(state =
  {myStoreItem: null, myPurchasedItem: null, storeItems: null, err: null}, action) {
    switch (action.type) {
    case 'STORE_LOOKUP':
        return Object.assign({}, state, {
            storeItems: action.storeItems
        });
    case 'MY_PURCHASE_ITEM':
        return Object.assign({}, state, {
            myPurchasedItem: action.myPurchasedItem
        });
    case 'MY_STORE_ITEM':
        return Object.assign({}, state, {
            myStoreItem: action.myStoreItem
        });
    case 'ITEM_CREATE': 
        return Object.assign(feedObject, state, {
            storeItems: action.newFeed
        });
    case 'ITEM_DELETE':
        return Object.assign({}, state, {

        });
    case 'ITEM_UPDATE':
        return Object.assign({}, state, {

        });
    case 'ITEM_PURCHASE':
        return {
            ...state,
            storeItems: {
                ...state.myPosts,
                isItemSold: true,
                timeofSold: action.timeofSold
            }
        }
    case 'ITEM_ERROR': 
        return Object.assign({}, state, {
            err: action.err
        });
    
    default:
        return state;
    }
}