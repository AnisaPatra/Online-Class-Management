import { authConstants } from './constants';
import axios from '../axios';

export const register = (user) => {
  return async (dispatch) => {
    let response;
    try {
      dispatch({ type: authConstants.SIGNUP_REQUEST });
      response = await axios.post(`/signup`, user);
      if (response.status === 201) {
        dispatch({ type: authConstants.SIGNUP_SUCCESS });
        const { token, user } = response.data;
        dispatch({
          type: authConstants.LOGIN_SUCCESS, 
          payload: {
            token, user
          }
          });
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

      }
      else {
        const error = response.data;
        dispatch({ type: authConstants.SIGNUP_FAILURE, payload: { error } });
      }
    }
    catch (error) {
      const data = error.response;
      dispatch({ type: authConstants.SIGNUP_FAILURE, payload: { error: data.error } });
    }
  }
}

export const login = (user) => {

  console.log(user)

  return async (dispatch) => {

    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post(`/signin`, {
      ...user
    });

    if (res.status === 200) {
      const { token, user } = res.data;
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token, user
        }
      });
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: res.data.error }
        });
      }
    }
  }
}

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed to login" },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    const res = await axios.post(`/signout`);
    if (res.status === 200) {
      dispatch({ type: authConstants.LOGOUT_SUCCESS });
      localStorage.clear();
    } else {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: { error: res.data.error }
      });
    }
  };
};