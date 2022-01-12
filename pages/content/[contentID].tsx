import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';

import { getDetailData } from '../../api/main';

import { Wrapper, BtnWrapper, Discription } from '../../styles/Content/ContentStyle';
import { Button } from '../../styles/Signin/SignInStyle';

const Content: NextPage = ({ contentData }: any) => {
  console.log(contentData);

  const {
    businessPrice,
    companyPrice,
    enterprisePrice,
    individualPrice,
    personalPrice,
    view,
    interest,
    title,
    tags,
    userinfo,
    description,
  } = contentData;

  const price = Math.min(
    ...[businessPrice, companyPrice, enterprisePrice, individualPrice, personalPrice].filter(price => price !== -1),
  );

  return (
    <Wrapper style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{price} P</span>
        <span>
          <span>{view} 뷰</span>
          <span>{interest} 찜</span>
        </span>
      </div>
      <h2>{title}</h2>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {tags.map((tag: { text: string }) => (
          <span key={`${tag.text}`}>#{tag.text}</span>
        ))}
      </div>
      <Image src={userinfo.profile.url} alt={'profile_image'} width={16} height={16} />
      <Discription>{description === null ? 'none' : description}</Discription>
      <BtnWrapper>
        <Button>문의하기</Button>
        <Button>구매하기</Button>
      </BtnWrapper>
    </Wrapper>
  );
};

export default Content;

export const getServerSideProps = async (ctx: any) => {
  const contentID = ctx.query.contentID;

  const contentData = await getDetailData(contentID);

  return { props: { contentData: contentData.data } };
};
