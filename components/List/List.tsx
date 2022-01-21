import { Wrapper } from './ListStyle';

import { useAppSelector } from '../../app/hooks';
import { useFetchProductListQuery } from '../../feature/productList/productListSlice';

import { Loading } from '../../components/Loading/Loading';
import ListItem from './ListItem/ListItem';

const List: React.FC = () => {
  const currentStart = useAppSelector(state => state.currentStart.value);
  const { data = [], isLoading }: any = useFetchProductListQuery(currentStart);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          {data.data?.map((content: any) => (
            <ListItem key={content._id} content={content} />
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default List;
