import * as CategoryApiUtil from '../util/category_api_util';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY_ERRORS = 'RECEIVE_CATEGORY_ERRORS';

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
};

export const receiveCategoryErrors = (err) => {
  return {
    type: RECEIVE_CATEGORY_ERRORS,
    error: err
  };
};

export const getCategories = () => (dispatch) => {
  return CategoryApiUtil.getCategories()
    .then((cat) => dispatch(receiveCategories(cat)),
    (err) => dispatch(receiveCategoryErrors(err)));
};
