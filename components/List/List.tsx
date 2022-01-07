import React from 'react';

import {
  Wrapper,
  Item,
  ProductImg,
  InfoBox,
  Title,
  UserBox,
  UserImage,
  UserName,
  SubInfoBox,
  Price,
} from './ListStyle';

interface ListI {
  contentList: {
    data: Array<{
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
        profile: {
          url: string;
        };
      };
      view: number;
      interest: number;
    }>;
  };
}

const List: React.FC<ListI> = ({ contentList }) => {
  return (
    <Wrapper>
      {contentList?.data.map(item => {
        const {
          _id,
          images,
          title,
          businessPrice,
          enterprisePrice,
          individualPrice,
          companyPrice,
          personalPrice,
          userinfo,
          view,
          interest,
        } = item;

        const { username, profile } = userinfo;
        const lowestPrice = Math.min(
          ...[businessPrice, enterprisePrice, individualPrice, companyPrice, personalPrice].filter(item => item >= 0),
        );

        return (
          <Item key={_id}>
            <ProductImg src={images} />
            <InfoBox>
              <Title href={`/content/${_id}`}>{title}</Title>
              <UserBox>
                <UserImage src={profile?.url} width={16} height={16} alt="profile_img" />
                <UserName>{username}</UserName>
              </UserBox>
              <SubInfoBox>
                <Price>{lowestPrice.toLocaleString()} P</Price>
                <div>
                  <span>{view} 뷰</span>
                  <span>{interest} 찜</span>
                </div>
              </SubInfoBox>
            </InfoBox>
          </Item>
        );
      })}
    </Wrapper>
  );
};

export default List;
