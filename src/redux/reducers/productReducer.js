const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'X':
      return state;
    default:
      return state;
  }
};

export default productReducer;
