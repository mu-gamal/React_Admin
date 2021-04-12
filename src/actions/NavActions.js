import {TOGGLE_NAV} from './types';

export const toggleNav = (val) => (dispatch) => {
  dispatch({type: TOGGLE_NAV, payload: val});
};
