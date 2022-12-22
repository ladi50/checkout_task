import * as ACTIONS from "store/entities/payment/actions/action-types";

const initialState = {
  creditCards: [],
  cvv: "",
  selectedCard: null,
  agreeTerms: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SAVE_CREDIT_CARD_DETAILS:
      // Do not save card that has already saved
      const foundCreditCard = state.creditCards.find(
        (card) => card.cardNumber === action.payload.cardNumber
      );

      if (foundCreditCard) return state;

      return {
        ...state,
        creditCards: [...state.creditCards, action.payload],
        selectedCard: state.selectedCard ?? action.payload.cardNumber
      };
    case ACTIONS.SAVE_CVV:
      return { ...state, cvv: action.payload };
    case ACTIONS.SET_SELECTED_CARD:
      return { ...state, selectedCard: action.payload };
    case ACTIONS.SET_AGREE_TERMS:
      return { ...state, agreeTerms: action.payload };

    default:
      return state;
  }
};
