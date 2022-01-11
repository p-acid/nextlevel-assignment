import { CookieValueTypes } from 'cookies-next/lib/types';

import req from './core';
import { PATH } from './core';

export const getUserData = (token: CookieValueTypes) => {
  const res = req.get(PATH.myInfo, { headers: { Authorization: `Bearer ${token}` } });

  return res;
};

export const getListData = async (params: object) => {
  const res = req.get(PATH.contentsList, { params: params });

  return res;
};

export const submitUserData = async (userData: object) => {
  const res = req.post(PATH.signIn, userData, {
    headers: {
      'content-type': 'application/json',
    },
  });

  try {
    return res;
  } catch (error) {
    return error;
  }
};
