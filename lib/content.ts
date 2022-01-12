import axios from 'axios';

import { URI } from '../config';

export const getDetailData = (contentID: string) => {
  const res = axios.get(`${URI}/v1/content/${contentID}`);

  return res;
};
