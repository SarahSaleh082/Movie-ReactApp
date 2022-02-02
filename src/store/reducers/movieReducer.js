import { CHANGE_MOVIES } from '../actions/moviesAction';
const INITIAL_STATE = [];

export default function moviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_MOVIES:
      return [
        
        ...action.payload,
      ];
    default:
      return state;
  }
}
