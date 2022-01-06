import { URI } from '../config';
import axios from 'axios';

// about user function

export const submitUserData = (userData: object) => {
  const res = axios.post(`${URI}/v1/auth/local`, userData, {
    headers: {
      'content-type': 'application/json',
    },
  });

  return res;
};
