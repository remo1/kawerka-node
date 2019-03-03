export const UPDATE_QUANTITY = 'product/UPDATE_QUANTITY';
export const SELECTED_ITEM = 'product/SELECTED_ITEM';

const initialState = {
  selected_item: null,
  quantity: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_ITEM:
      return { ...state, selected_item: action.payload}
    case UPDATE_QUANTITY:
      return { ...state, quantity: action.payload };

    default:
      return { ...state };
  }
};

export const selectedProduct = data => ({
  type: SELECTED_ITEM,
  payload: data
});