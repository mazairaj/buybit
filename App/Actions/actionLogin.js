import { AsyncStorage} from 'react-native'
const Environment = require('../Environment.js')

export function login(userObject) {
    return dispatch => {
        dispatch(attempt());

    	fetch(Enviroment.SERVER + 'login', {
    		method: 'POST',
    		headers: {
    			'Content-Type' : 'application/json'
    		},
    		body: JSON.stringify({
		        email: userObject.email,
		        password: userObject.password
		    }).then((response) => response.json())
		    .then((responseJson) => {
		    	var userObject = Object.assign({}, responseJson);
                dispatch(userLogin(userObject));
		    })
            .catch((err) => {
                dispatch(errors(err))
            });
    	})
    };
}

export function signup(userObject) {
    return dispatch => {
    	fetch(Enviroment.SERVER + 'signup', {
    		method: 'POST',
    		headers: {
    			'Content-Type' : 'application/json'
    		},
    		body: JSON.stringify({
    			firstName: userObject.firstName,
    			lastName: userObject.lastName,
		        email: email,
		        password: password,
		        passwordRepeat: passwordRepeat
		    }).then((response) => response.json())
		    .then((responseJson) => {
		    	var userObject = Object.assign({}, responseJson);
                dispatch(userLogin(userObject));
		    })
            .catch((err) => {
                dispatch(errors(err))
            });
    	})
    };
}

export function logout() {
    return {
        type: 'LOGOUT'
    };
}

function attempt() {
    return {
        type: 'LOADING'
    };
}

function errors(err) {
    return {
        type: 'ERROR',
        err
    };
}

function userLogin(userObject) {
    return {
        type: 'LOGIN',
        userObject
    };
}