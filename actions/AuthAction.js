import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGIN
} from './types';

export const loginUser = ({ email, password }) => {
    console.log(email , password ,">>>>>")

    return (dispatch) => {
        dispatch({ type: LOGIN, payload: { email, password } });
    }
}