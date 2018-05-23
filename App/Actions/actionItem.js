import * as actionLogin from './actionLogin';
const Environment = require('../Environment.js')

//store - look up, filter actions
export function storeLookUp() {
    return dispatch => {
        fetch(Enviroment.SERVER + 'storeLookUp', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }          
        }).then((response) => response.json())
            .then((responseJson) => {
                if(responseJson){
                    console.log(responseJson)
                    var storeItems = JSON.parse(responseJson);
                    dispatch(store_look_up(storeItems));
                }else{
                   dispatch(errors("No Responses!")) 
                }
        }).catch((err) => {
            dispatch(errors(err))
        });   
    };
}

export function myPurchasedItem() {
    return dispatch => {
        fetch(Enviroment.SERVER + 'myPurchasedItem', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }          
        }).then((response) => response.json())
            .then((responseJson) => {
                if(responseJson){
                    console.log(responseJson)
                    var myPurchasedItem = JSON.parse(responseJson);
                    dispatch(my_purchase_item(myPurchasedItem));
                }else{
                   dispatch(errors("No Responses!")) 
                }
        }).catch((err) => {
            dispatch(errors(err))
        });   
    };
}

export function myStoreLookUp() {
    return dispatch => {
        fetch(Enviroment.SERVER + 'myStoreLookUp', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }          
        }).then((response) => response.json())
            .then((responseJson) => {
                if(responseJson){
                    console.log(responseJson)
                    var myStoreItem = JSON.parse(responseJson);
                    dispatch(my_store_look_up(myStoreItem));
                }else{
                   dispatch(errors("No Responses!")) 
                }
        }).catch((err) => {
            dispatch(errors(err))
        });   
    };
}


function store_look_up(storeItems) {
    return {
        type: 'STORE_LOOKUP',
        storeItems
    };
}

function my_purchase_item(myPurchasedItem) {
    return {
        type: 'MY_PURCHASE_ITEM',
        myPurchasedItem
    };
}

function my_store_look_up(myStoreItem) {
    return {
        type: 'MY_STORE_ITEM',
        myStoreItem
    };
}

//item -  create, update, delete, buyitem actions
export function createItem(itemObject) {
    return dispatch => {
        fetch(Enviroment.SERVER + 'createItem', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                itemObject: itemObject            
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if(responseJson){
                    var itemObject = [...responseJson];
                    dispatch(createItem(itemObject));
                    dispatch(actionLogin.updateUserItem(itemObject._id))
                }else{
                   dispatch(errors("No Responses!")) 
                }
        }).catch((err) => {
                dispatch(errors(err))
        });
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
            })	        
		}).then((response) => response.json())
		    .then((responseJson) => {
		    	var itemObject = Object.assign({}, responseJson);
                dispatch(item_purchase(itemObject.timeofSold));
                dispatch(loginActions.updateUser(newuserObject));
		}).catch((err) => {
                dispatch(errors(err))
        });
    };
}

function item_create(itemObject) {
    return {
        type: 'ITEM_CREATE',
        itemObject
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

function item_purchase(timeofSold) {
    return {
        type: 'ITEM_PURCHASE',
        timeofSold
    };
}

function errors(err) {
    return {
        type: 'ITEM_ERROR',
        err
    };
}

//get exchange ratio
export function storeLookUp() {
    return dispatch => {
        // "Enviroment.server = http:local:8080/"
        fetch(Enviroment.SERVER + 'getExchange', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }          
        }).then((response) => response.json())
            .then((responseJson) => {
                if(responseJson){
                    console.log(responseJson)
                    var exchangeRate = JSON.parse(responseJson);
                    dispatch(exchange_rate(exchangeRate));
                }else{
                   dispatch(errors("No Responses!")) 
                }
        }).catch((err) => {
            dispatch(errors(err))
        });   

    };
}

function exchange_rate(exchangeRate) {
    return {
        type: 'EXCHANGE_RATE',
        exchangeRate
    };
}

// router.get('/getExchange'){
//     .......
//     res.send(exchangeRate)
// }