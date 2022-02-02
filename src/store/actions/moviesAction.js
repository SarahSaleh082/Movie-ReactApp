import { axiosInstace } from "../../network/axiosConfig";


export const CHANGE_MOVIES = "CHANGE_MOVIES";

export const changeMoviesAction = (lang) => (dispatch)=>{
  // console.log(lang);
  return axiosInstace.get(`/movie/popular?language=${lang}`)
    .then((res)=>{
      dispatch({
        type: CHANGE_MOVIES,
        payload: res.data.results
      });
        
    })
    .catch(()=>{})
};