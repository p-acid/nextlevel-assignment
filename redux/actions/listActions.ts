import { LIST_INFO } from '../constants/listConstants';
import { getListData } from '../../api/main';

import { SystemError } from '../../interface/interface';
import { LIST_SUCCESS, LIST_FAIL, CLEAR_ERRORS } from '../constants/listConstants';

export const getList = (start: any) => async (dispatch: any) => {
  try {
    const { data } = await getListData({
      _limit: LIST_INFO.PRODUCTS_LIMIT,
      _sort: 'createdAt:desc',
      isActive: true,
      _start: start,
    });

    dispatch({ type: LIST_SUCCESS, payload: data });
  } catch (error) {
    const err = error as SystemError;
    dispatch({ type: LIST_FAIL, payload: err.response.data.message });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch: any) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
