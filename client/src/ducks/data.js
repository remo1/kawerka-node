export const FETCH_HOMEPAGE = "products/FETCH_HOMEPAGE";

const initialState = {
  homepage: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOMEPAGE:
      return {
        ...state,
        homepage: action.payload,
        error: null
      };

    default:
      return { ...state };
  }
};

export const fetchHomepage = data => ({
  type: FETCH_HOMEPAGE,
  payload: data
});
