import { URI } from '../config';

// about user function

export const submitUserData = (userData: BodyInit) => {
  const res = fetch(`${URI}/v1/auth/local`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: userData,
  }).then(res => res.json());

  return res;
};
