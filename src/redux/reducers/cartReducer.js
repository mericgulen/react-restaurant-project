import ActionTypes from '../ActionTypes';
const initialState = {
  cart: [],
  loading: true,
  error: false,
};

const cartReducer = (state = initialState, action) => {
  //- console.log(action)
  switch (action.type) {
    case ActionTypes.CART_LOADING:
      return { ...state, loading: true };
    case ActionTypes.REST_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ActionTypes.CART_SUCCESS:
      return { cart: action.payload, loading: false, error: false };

    case ActionTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case ActionTypes.UPDATE_CART:
      const updateItem = state.cart.map(item =>
        item.id === action.payload.id ? action.payload : item
      );
      return { ...state, cart: updateItem };
    case ActionTypes.DELETE_CART:

    const filteredCart = state.cart.filter(item => item.id !== action.payload );     
      return { ...state, cart: filteredCart };
    default:
      return state;
  }
};

export default cartReducer;
