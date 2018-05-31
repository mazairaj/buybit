import * as actionItem from './actionItem';
import * as actionLogin from './actionLogin';


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
    checkOutCart([itemId], exchangeRate, myethAmount)
}

export function checkOutCart(itemIds, totalItemAmountinUSD, exchangeRate, myethAmount) {
    return dispatch => {
        fetch(Enviroment.SERVER + 'checkOutCart', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                itemIds : itemIds,
                exchangeRate: exchangeRate,
                myethAmount: myethAmount,
                totalItemAmountinUSD: totalItemAmountinUSD           
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if(responseJson){
                    var userObject = Object.assign({}, responseJson);
                    dispatch(check_out_cart())
                    //update user's my purchase item list
                    dispatch(actionLogin.updateUser(userObject))
                    // need to update store item base of quantity
                    // will add later
                }else{
                   dispatch(errors(responseJson)) 
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