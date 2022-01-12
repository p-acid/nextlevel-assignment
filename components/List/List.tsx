import { Wrapper } from './ListStyle';

import ListItem from './ListItem/ListItem';
import { ListInterface } from '../../interface/interface';

const List: React.FC<ListInterface> = ({ contentList }: ListInterface) => {
  return (
    <Wrapper>
      {contentList?.map((content: any) => (
        <ListItem key={`${content._id}_content_id`} content={content} />
      ))}
    </Wrapper>
  );
};

export default List;
