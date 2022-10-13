import { types } from '../types/types'
import axios from 'axios';

export const startLogin = (password, email) => {
    return async (dispatch) => {
        const resp = await axios.get('data.json');
        const body = resp.data;
        let success = false;

        await body.map((user) => {
            if (user.email === email && user.password === password) {
                success = true;
                localStorage.setItem('token', JSON.stringify(user));
                return dispatch(login({
                    uid: user.id,
                    name: user.name,
                    email: user.email
                }))
            }
            
            return success;
        });

        if (!success) {
            alert("Wrong credentials");
        }
    }
};

export const startChecking = () => {
    return async (dispatch) => {
        const user = await localStorage.getItem('token');;

        if (user) {
            let body = JSON.parse(user);

            dispatch(login({
                uid: body.id,
                name: body.name,
            }))
        } else {
            dispatch(checkingFinish());
        }
    }
}

const checkingFinish = () => ({
    type: types.AUTH_CHECKING_FINISH
});

const login = (user) => ({
    type: types.AUTH_LOGIN,
    payload: user
});

const logout = (data) => ({
    type: types.AUTH_LOGOUT,
    payload: data
});

export const startLogut = () => {
    return async (dispatch) => {
        localStorage.clear();
        dispatch(logout({
            uid: ''
        }));
    }
}
