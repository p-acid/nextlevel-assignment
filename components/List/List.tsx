import { Wrapper } from './ListStyle';

import ListItem from './ListItem/ListItem';

import { useSelector } from 'react-redux';

const List: React.FC = () => {
  const { list }: any = useSelector(state => state);

  return (
    <div>
      <Wrapper>
        {list?.map((content: any) => (
          <ListItem key={`${content._id}_content_id`} content={content} />
        ))}
      </Wrapper>
    </div>
  );
};

export default List;
