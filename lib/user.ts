import axios from 'axios';
import { CookieValueTypes } from 'cookies-next/lib/types';

import { URI } from '../config';

export function getUserData(token: CookieValueTypes) {
  const res = axios.get(`${URI}/v1/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
}

export const submitUserData = (userData: object) => {
  const res = axios.post(`${URI}/v1/auth/local`, userData, {
    headers: {
      'content-type': 'application/json',
    },
  });

  return res;
};
