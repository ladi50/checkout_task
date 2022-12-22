import * as ACTIONS from "store/entities/payment/actions/action-types";

export const saveCreditCard = (data) => (dispatch) => {
  dispatch({ type: ACTIONS.SAVE_CREDIT_CARD_DETAILS, payload: data });
};

export const saveCVV = (cvv) => (dispatch) => {
  dispatch({ type: ACTIONS.SAVE_CVV, payload: cvv });
};

export const setSelectedCard = (cardNumber) => (dispatch) => {
  dispatch({ type: ACTIONS.SET_SELECTED_CARD, payload: cardNumber });
};

export const setAgreeTerms = (value) => (dispatch) => {
  dispatch({ type: ACTIONS.SET_AGREE_TERMS, payload: value });
};
