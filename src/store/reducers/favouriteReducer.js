import { CHANGE_FAVOURITE } from '../actions/favouriteAction';

const INITIAL_STATE = [];

export default function favouriteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_FAVOURITE:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
}
