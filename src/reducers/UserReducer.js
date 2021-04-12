import {AUTH_SUCCESS, AUTH_LOADING, AUTH_LOGOUT} from '../actions/types';

const INITIAL_STATE = {
  _id: null,
  token: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case AUTH_SUCCESS:
      return {...state, ...payload};
    case AUTH_LOADING:
      return {...state, loading: payload};
    case AUTH_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
