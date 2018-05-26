import * as actionItem from './actionItem';

//Cart - add. update, remove
export function addItemCart(itemObject) {
    return dispatch => {
        dispatch({        
            type: 'ADD_CART_ITEM',
            itemObject
        })
    }
}

export function removeItemCart(item) {
    return dispatch => {
        var indexRemove = item._id
        dispatch({
            type: 'REMOVE_CART_ITEM',
            indexRemove
        })
    }
}

export function buyItem(itemId, exchangeRate, myethAmount) {
    checkOutCart(itemId, exchangeRate, myethAmount)
}

export function checkOutCart(itemIds, exchangeRate, myethAmount) {
    return dispatch => {
        fetch(Enviroment.SERVER + 'checkOutCart', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                itemIDs : itemIds,
                exchangeRate: exchangeRate,
                myethAmount: myethAmount            
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if(responseJson){
                    dispatch(check_out_cart())
                    //need to update mypurchaseitem state in store
                    dispatch(actionItem.my_purchase_item(itemIds))
                    //need to update storeItems state in store - waiting for Eva
                    // dispatch(actionItem.)

                }else{
                   dispatch(errors("No Responses!")) 
                }
        }).catch((err) => {
                dispatch(errors(err))
        });
    }
}

function check_out_cart(){
    return {
        type: 'CART_CHECKOUT',
    }
}