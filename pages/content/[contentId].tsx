import { getCookie } from 'cookies-next';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { getDetailData } from '../../api/main';

import { TagBox, Tag } from '../../components/Banner/BannerStyle';
import { SubInfoBox, Price, UserBox, UserImage, UserName } from '../../components/List/ListItem/ListItemStyle';
import {
  FlexWrapper,
  Wrapper,
  StatisticData,
  ProductImage,
  BtnWrapper,
  BackBtn,
} from '../../styles/Content/ContentStyle';
import { Button } from '../../styles/Signin/SignInStyle';

const BTN_DATA = ['문의', '구매'];

const Content: NextPage = ({ contentData }: any) => {
  const router = useRouter();
  const token = getCookie('token');

  const {
    images,
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

  const { username, profile } = userinfo;
  const price =
    Math.min(
      ...[businessPrice, companyPrice, enterprisePrice, individualPrice, personalPrice].filter(
        price => price !== -1 && price !== undefined,
      ),
    ) || 0;

  useEffect(() => {
    if (!token) {
      router.push('/sign-in');
    }
  }, [token, router]);

  return (
    <FlexWrapper>
      <Wrapper>
        <ProductImage src={images[0].url} alt="product_image" />
        <SubInfoBox>
          <Price>{price.toLocaleString()} P</Price>
          <StatisticData>
            <span>{view} 뷰</span>
            <span>{interest} 찜</span>
          </StatisticData>
        </SubInfoBox>
        <h2>{title}</h2>
        <TagBox>
          {tags.map((tag: { text: string }) => (
            <Tag key={`${tag.text}`}>#{tag.text}</Tag>
          ))}
        </TagBox>
        <UserBox>
          <UserImage
            src={profile?.url ?? '/images/banner/no-data-user-profile.png'}
            alt="profile_image"
            width={16}
            height={16}
          />
          <UserName>{username}</UserName>
        </UserBox>
        <p>{description}</p>
        <BtnWrapper>
          {BTN_DATA.map(type => (
            <Button key={type} onClick={() => alert(`${type} 준비중 입니다.`)}>
              {type}하기
            </Button>
          ))}
        </BtnWrapper>
      </Wrapper>
      <BackBtn onClick={() => router.push('/')}>스토어로 돌아가기</BackBtn>
    </FlexWrapper>
  );
};

export default Content;

export const getServerSideProps = async (ctx: any) => {
  const contentId = ctx.query.contentId;

  const contentData = await getDetailData(contentId);

  return { props: { contentData: contentData.data } };
};
