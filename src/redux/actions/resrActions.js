import ActionTypes from '../ActionTypes';
import api from '../../utils/api';

///  function of the actions
export const setRestData = payload => ({
  type: ActionTypes.REST_SUCCESS,
  payload,
});

export const setLoading = () => {
  return { type: ActionTypes.REST_LOADING };
};

export const setError = payload => {
  return { type: ActionTypes.REST_ERROR, payload };
};

/// use thunk

export const getRestData = () => dispatch => {
  dispatch(setLoading());

  api
    .get('/restaurants')
    .then(res => dispatch(setRestData(res.data)))
    .catch(err => dispatch(setError(err)));
};
