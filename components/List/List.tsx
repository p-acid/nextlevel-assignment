import { Wrapper } from './ListStyle';

import { Loading } from '../../components/Loading/Loading';
import ListItem from './ListItem/ListItem';

import { useSelector } from 'react-redux';

const List: React.FC = () => {
  const { list }: any = useSelector(state => state);

  return (
    <>
      {list.length > 0 ? (
        <Wrapper>
          {list?.map((content: any) => (
            <ListItem key={content._id} content={content} />
          ))}
        </Wrapper>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default List;
