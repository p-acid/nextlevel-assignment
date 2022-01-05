import { URI } from '../config';

// about user function

export function getContentsList() {
  const res = fetch(`${URI}/v1/contents?isActive=true&_sort=createdAt&_limit=5`, {
    method: 'GET',
  }).then(res => res.json());

  return res;
}
