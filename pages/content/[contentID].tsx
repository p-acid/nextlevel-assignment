import { NextPage } from 'next';
import React from 'react';

import { getDetailData } from '../../lib/content';

const Content: NextPage = ({ contentData }: any) => {
  return <div>{}</div>;
};

export default Content;

export const getServerSideProps = async (ctx: any) => {
  const contentID = ctx.query.contentID;

  const contentData = await getDetailData(contentID);

  return { props: { contentData: contentData.data.data } };
};
