import { Wrapper, Main } from './LayoutStyle';

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default Layout;
