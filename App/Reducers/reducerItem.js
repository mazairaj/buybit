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
    case 'MY_STORE_ITEM':
        return Object.assign({}, state, {
            myStoreItem: action.myStoreItem
        });
    case 'ITEM_CREATE':
        return {
            //Concatenate the new item into both the myStoreItem state, and the storeItem state
            myStoreItem: [...state.myStoreItem, action.newFeed],
            storeItems: [...state.storeItems, action.newFeed]
        };
    case 'ITEM_DELETE':
        //Returns the state, without the item that has the id we passed here
        return state.filter(({ id }) => id !== action.removedItem);
    case 'ITEM_UPDATE':
        return {
            //Concatenate the edited item into both the myStoreItem state, and the storeItem state
            myStoreItem: [...state.myStoreItem,action.newFeed],
            storeItems: [...state.storeItems, action.newFeed]
        };
    case 'ITEM_PURCHASE':
        return {
            ...state,
            storeItems: {
                ...state.myPosts,
                isItemSold: true,
                timeofSold: action.timeofSold
            }
        };
        case 'EXCHANGE_RATE':
        return {
            ...state,
                exchangeRate: action.exchangeRate
        };
    default:
        return state;
    }
}