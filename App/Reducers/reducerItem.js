export function reducerItem(state =
  {itemSold: null, itemPurchase: null, storeItems: null}, action) {
    switch (action.type) {

    case 'ITEM_CREATE': 
        return Object.assign({}, state, {

        });
    case 'ITEM_DELETE':
        return Object.assign({}, state, {

        });
    case 'ITEM_UPDATE':
        return Object.assign({}, state, {

        });
    case 'ITEM_PURCHASE':
        return Object.assign({}, state, {

        });
    case 'ITEM_ERROR': 
        return Object.assign({}, state, {

        });
    
    default:
        return state;
    }
}