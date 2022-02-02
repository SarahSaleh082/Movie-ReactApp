import { combineReducers } from "redux";
import favouriteReducer from "./favouriteReducer";
import movieReducer from "./movieReducer";


export default combineReducers({
  favourite: favouriteReducer,
  movies: movieReducer,
});
