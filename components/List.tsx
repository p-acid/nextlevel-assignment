import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

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
  console.log(contentList);
  const { data } = contentList;

  return (
    <Wrapper>
      {data.map(item => {
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
              <Title>{title}</Title>
              <UserBox>
                <UserImage src={profile.url} width={16} height={16} alt="profile_img" />
                <UserName>{username}</UserName>
              </UserBox>
              <SubInfoBox>
                <Price>{lowestPrice} P</Price>
                <div>
                  <View>{view} 뷰</View>
                  <Interest>{interest} 찜</Interest>
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

const Wrapper = styled.ul`
  margin: 0 auto;
  width: 570px;
`;

const Item = styled.li`
  display: flex;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

const ProductImg = styled.div<{ src: Array<{ url: string }> }>`
  min-width: 254px;
  min-height: 132px;
  background: url(${({ src }) => src[0].url});
  background-size: cover;
  background-position: center;

  &:hover {
    background: url(${({ src }) => src[1].url});
    background-size: cover;
    background-position: center;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 1rem;
`;

const Title = styled.p``;

const UserBox = styled.div``;

const UserImage = styled.img`
  border-radius: 50%;
`;

const UserName = styled.span``;

const SubInfoBox = styled.div`
  display: flex;
`;

const Price = styled.span``;

const View = styled.span``;

const Interest = styled.span``;
