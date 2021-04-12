import {TOGGLE_NAV} from '../actions/types';

const INITIAL_STATE = 'responsive';

export default (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {
    case TOGGLE_NAV:
      return payload;
    default:
      return state;
  }
};
