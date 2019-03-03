export const SUBMIT_PAYMENT = "payments/SUBMIT_PAYMENT";
export const PAYMENT_COMPLETE = "payments/PAYMENT_COMPLETE";
export const SEND_TO_PAYU = "payments/SEND_TO_PAYU";

const initialState = {
  customer: null,
  payu: null,
  processing: false,
  complete: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_PAYMENT:
      return { ...state, processing: true, complete: false };
    case SEND_TO_PAYU:
      return { ...state, payu: action.payload };
    case PAYMENT_COMPLETE:
      return { ...state, processing: false, complete: true };

    default:
      return { ...state };
  }
};
