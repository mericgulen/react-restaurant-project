import ActionTypes from '../ActionTypes';
import api from '../../utils/api';
import { v4 } from 'uuid';

export const getCartData = () => (dispatch, payload) => {
  dispatch({ type: ActionTypes.CART_LOADING });

  api
    .get(`/cart`)
    .then(res =>
      dispatch({ type: ActionTypes.CART_SUCCESS, payload: res.data })
    )
    .catch(err =>
      dispatch({
        type: ActionTypes.CART_ERROR,
        payload: err.message,
      })
    );
};

/// add new product to the cart with thunk

export const addProductToCart = product => dispatch => {

 //- console.log(product);

  const newItem = {
    id: v4(),
    productId : product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantName: product.restaurant_name,
    amount: 1,
  };

  api
    .post(`/cart`, newItem)
    .then(res => dispatch({ type: ActionTypes.ADD_TO_CART, payload: newItem }))
    .catch(err => dispatch({ type: ActionTypes.CART_ERROR, payload: err }));
};


/// update amount of prodcut in the ProductCard and Cart
export const updateAmoutOfProduct = (id, newAmount) => (dispatch) => {

  api.patch(`/cart/${id}`, {amount:newAmount})
  .then((res) => dispatch({type: ActionTypes.UPDATE_CART, payload:res.data }))
}

 /// update amount of prodcut in the Cart

export const deleteProduct = (id) => (dispatch) => {

  api.delete(`/cart/${id}`)
  .then(res => dispatch({type: ActionTypes.DELETE_CART, payload: id}))


}