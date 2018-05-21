import * as actionLogin from './actionLogin';

export function createItem(userId, ethAmount, itemId) {
    return dispatch => {

    };
}

export function updateItem(userId, ethAmount, itemId) {
    return dispatch => {

    };
}

export function deleteItem(userId, ethAmount, itemId) {
    return dispatch => {

    };
}

export function buyItem(userId, ethAmount, itemId) {
    return dispatch => {
    	fetch(Enviroment.SERVER + 'buyItem', {
    		method: 'POST',
    		headers: {
    			'Content-Type' : 'application/json'
    		},
    		body: JSON.stringify({
                userId: userId,
                ethAmount: ethAmount,
		        itemId: itemId		        
		    }).then((response) => response.json())
		    .then((responseJson) => {
		    	var itemObject = Object.assign({}, responseJson);
                dispatch(userLogin(itemObject));
                dispatch(loginActions.addUser(newuserObject));
		    })
            .catch((err) => {
                dispatch(errors(err))
            });
    	})
    };
}

function item_create(item_purchase_id) {
    return {
        type: 'ITEM_CREATE',
        item_purchase_id
    };
}

function item_update(item_purchase_id) {
    return {
        type: 'ITEM_UPDATE',
        item_purchase_id
    };
}

function item_delete(item_purchase_id) {
    return {
        type: 'ITEM_DELETE',
        item_purchase_id
    };
}

function item_purchase(item_purchase_id) {
    return {
        type: 'ITEM_PURCHASE',
        item_purchase_id
    };
}

function errors(err) {
    return {
        type: 'ITEM_ERROR',
        err
    };
}