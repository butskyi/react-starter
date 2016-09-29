import constants from '@constants';

const {
    LOGIN_USER, LOGIN_USER_SUCCESS, LOGOUT_USER, FETCH_USER,
} = constants;

/**
 * Login
 */
export const loginUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: {
        token: localStorage.getItem(window.tokenName),
        user,
    }
});

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
export const logout = () => ({
    type: LOGOUT_USER
});

/**
 * Fetch User data
 */
export const fetchUser = (userId) => ({
    typeName: FETCH_USER,
    api: {
        path: `/users/${userId}`,
    }
});
