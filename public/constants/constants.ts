export const LIST_INFO = {
  PRODUCTS_LIMIT: 5,
  TOTAL_PAGES: 20,
  PAGE_LIST_LIMIT: 5,
};

const { PRODUCTS_LIMIT, PAGE_LIST_LIMIT } = LIST_INFO;

export const currentPage = (state: number) => Math.floor(state / PRODUCTS_LIMIT) + 1;
export const currentPagesRange = (state: number) =>
  (Math.ceil(currentPage(state) / PAGE_LIST_LIMIT) - 1) * PAGE_LIST_LIMIT;
