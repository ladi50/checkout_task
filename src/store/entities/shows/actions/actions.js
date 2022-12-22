import * as ACTIONS from "./action-types";

export const setShowData = (data) => (dispatch) => {
  dispatch({ type: ACTIONS.SET_SHOW_DATA, payload: data });
};
