import * as APIUtil from '../api/session_api_util'
import jwt_decode from 'jwt-decode'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

// Action Creators 
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});


// Thunk Action Creators
export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then( (res) => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            APIUtil.setAuthToken(token);

            const decoded = jwt_decode(token);

            console.log(decoded, 'this is the decoded ')
            dispatch(receiveCurrentUser(decoded))
    // dispatch(receiveUserSignIn())
  })
  .catch(err => dispatch(receiveErrors(err.response.data)))
);

export const login = user => dispatch => (
  APIUtil.login(user)
    .then( (res) => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);

        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
  })
  .catch(err => {
    dispatch(receiveErrors(err.response.data));
  })
)

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken')
  APIUtil.setAuthToken(false)
  dispatch(logoutUser())
};