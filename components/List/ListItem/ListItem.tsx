import { useRouter } from 'next/router';
import { ListItemInterface } from '../../../interface/interface';
import { Item, ProductImage, InfoBox, Title, UserBox, UserImage, UserName, SubInfoBox, Price } from './ListItemStyle';

const ListItem: React.FC<ListItemInterface> = ({ content }) => {
  const router = useRouter();

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
  } = content;

  const { username, profile } = userinfo;
  const lowestPrice = Math.min(
    ...[businessPrice, enterprisePrice, individualPrice, companyPrice, personalPrice].filter(item => item >= 0),
  );
  return (
    <Item>
      <ProductImage onClick={() => router.push(`/content/${_id}`)} src={images} />
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
};

export default ListItem;
