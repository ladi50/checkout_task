import * as ACTIONS from "store/entities/shows/actions/action-types";

const initialState = {
  show: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_SHOW_DATA:
      return { ...state, show: action.payload };
    default:
      return state;
  }
};
