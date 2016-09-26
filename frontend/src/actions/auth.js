import { push } from 'react-router-redux';
import constants from '@constants';

const { LOGIN_USER, LOGIN_USER_SUCCESS, LOGOUT_USER, FETCH_USER } = constants;

export const loginUserSuccess = (user, queryNext) =>
    (dispatch) => Promise.resolve(dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
            token: localStorage.getItem(window.tokenName),
            user,
        }
    }))
    .then(() => dispatch(push(queryNext || '/')));

export const loginUser = (credentials) => ({
    typeName: LOGIN_USER,
    api: {
        path: '/login',
        options: {
            method: 'post',
            body: JSON.stringify(credentials),
        }
    },
});

/**
 * Logout
 */
export const logout = () =>
    (dispatch) => Promise.resolve(dispatch({
        type: LOGOUT_USER
    }))
    .then(() => dispatch(push('/')));

/**
 * Fetch User data
 */
export const fetchUser = (userId) => ({
    typeName: FETCH_USER,
    api: {
        path: `/users/${userId}`,
    }
});
