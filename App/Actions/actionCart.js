//Cart - add. update, remove
export function addItemCart(item) {
    return dispatch => {
        dispatch({        
            type: 'ADD_CART_ITEM',
            item
        })
    }
}

export function updateItemCart(item) {
    return dispatch => {
        dispatch({
            type: 'UPDATE_CART_ITEM',
            item
        })
    }
}

export function removeItemCart(item) {
    return dispatch => {
        dispatch({
            type: 'REMOVE_CART_ITEM',
            item
        })
    }
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

                    //need to update storeItems state in store


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