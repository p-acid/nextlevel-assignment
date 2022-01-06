import { URI } from '../config';
import axios from 'axios';

// about user function

export const submitUserData = (userData: BodyInit) => {
  const res = axios.post<any, { data: { jwt: string } }>(`${URI}/v1/auth/local`, userData, {
    headers: {
      'content-type': 'application/json',
    },
  });

  return res;
};
