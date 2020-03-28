import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGIN
} from '../actions/types';

const INITIAL_STATE = {
    user: null,
    loading: false,
    error: ''
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, loading: true}
        default:
            return state;
    }
}