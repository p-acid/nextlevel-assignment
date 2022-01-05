import { URI } from '../config';

// about user function

export function getUserData(token: string) {
  const res = fetch(`${URI}/v1/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());

  return res;
}
