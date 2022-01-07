import { URI } from '../config';
import axios from 'axios';
import { CookieValueTypes } from 'cookies-next/lib/types';

// about user function

export function getUserData(token: CookieValueTypes) {
  const res = fetch(`${URI}/v1/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());

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
