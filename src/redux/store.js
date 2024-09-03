import { combineReducers, createStore, applyMiddleware } from 'redux';
import restaurantReducer from './reducers/restaurantReducer';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  product: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
