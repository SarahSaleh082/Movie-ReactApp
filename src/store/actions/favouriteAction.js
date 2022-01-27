export const CHANGE_FAVOURITE = "CHANGE_FAVOURITE";

export const changeFavouriteAction = (payload) => {
  return {
    type: CHANGE_FAVOURITE,
    payload,
  };
};
