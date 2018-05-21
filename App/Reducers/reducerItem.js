export function reducerItem(state =
  {itemSold: null, itemPurchase: null, storeItems: null, err: null}, action) {
    switch (action.type) {
    case 'STORE_LOOKUP':
        return Object.assign({}, state, {
            storeItems: action.storeItems
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