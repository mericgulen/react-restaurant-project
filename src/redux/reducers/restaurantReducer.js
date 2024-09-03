import ActionTypes from '../ActionTypes';

const initialState = {
  restaurants: [],
  isLoading: true,
  isError: false,
};

const restaurantReducer = (state = initialState, action) => {
 //- console.log(action);
  switch (action.type) {
    case ActionTypes.REST_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.REST_ERROR:
      return { ...state, isLoading: false, isError: action.payload.message };
    case ActionTypes.REST_SUCCESS:
      return { restaurants: action.payload, isLoading: false , isError: false};
    default:
      return state;
  }
};

export default restaurantReducer;
