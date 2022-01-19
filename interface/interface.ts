import { ChangeEventHandler } from 'react';

interface Url {
  url: string;
}

export interface BannerInterface {
  userData: {
    banner: Url;
    profile: Url;
    username: string;
    introduction: string;
    receiveOnly: string;
    carrerFirst: string;
    carrerSecond: string;
  };
}

export interface ListItemInterface {
  content: {
    _id: string;
    images: Array<{
      name: string;
      url: string;
    }>;
    title: string;
    businessPrice: number;
    enterprisePrice: number;
    individualPrice: number;
    companyPrice: number;
    personalPrice: number;
    userinfo: {
      username: string;
      profile: Url;
    };
    view: number;
    interest: number;
  };
}

export interface InputBoxInterface {
  data: {
    type: string;
    placeholder: string;
    title: string;
  };
  event: ChangeEventHandler;
  value: string;
}
