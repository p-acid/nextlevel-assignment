import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ListItemInterface } from '../../interface/interface';
import { URL, PATH } from '../../api/core/index';

type fetchResponse = ListItemInterface[];

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints(builder) {
    return {
      fetchProductList: builder.query<fetchResponse, number | void>({
        query: (start = 0, limit = 5) => {
          return `${PATH.contentsList}?isActive=true&_sort=createdAt:desc&_start=${start}&_limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchProductListQuery } = apiSlice;
