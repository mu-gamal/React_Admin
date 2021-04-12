import {AUTH_SUCCESS, AUTH_LOGOUT, AUTH_LOADING} from './types';
import ApiService from '../services';

export const login = (values, redirect) => async (dispatch) => {
  try {
    dispatch({type: AUTH_LOADING, payload: true});
    const user = await ApiService.login();
    dispatch({type: AUTH_SUCCESS, payload: user});
    ApiService.setToken();
    redirect('/');
  } catch (e) {
    dispatch({type: AUTH_LOADING, payload: false});
    alert(e?.message || e?.data?.message);
  }
};

export const logout = () => (dispatch) => {
  dispatch({type: AUTH_LOGOUT});
  ApiService.setToken();
};
