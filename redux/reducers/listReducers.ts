import {
  LIST_SUCCESS,
  LIST_FAIL,
  CLEAR_ERRORS,
  ADD_CURRENT,
  MINUS_CURRENT,
  CHOICE_CURRENT,
  LIST_INFO,
} from '../constants/listConstants';

const { PRODUCTS_LIMIT, PAGE_LIST_LIMIT } = LIST_INFO;

// All rooms reducer
export const listReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case LIST_SUCCESS:
      return action.payload;

    case LIST_FAIL:
      return { error: action.payload };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const currentStartReducer = (state: any = 0, action: any) => {
  const currentPage = Math.floor(state / PRODUCTS_LIMIT) + 1;
  const currentPagesRange = (Math.ceil(currentPage / PAGE_LIST_LIMIT) - 1) * PAGE_LIST_LIMIT;

  switch (action.type) {
    case ADD_CURRENT:
      return (currentPagesRange + PAGE_LIST_LIMIT) * PRODUCTS_LIMIT;

    case MINUS_CURRENT:
      return (currentPagesRange - PAGE_LIST_LIMIT) * PRODUCTS_LIMIT;

    case CHOICE_CURRENT:
      return action.payload * PRODUCTS_LIMIT;

    default:
      return state;
  }
};
