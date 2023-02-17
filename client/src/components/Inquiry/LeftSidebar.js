import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaGlobeAmericas } from 'react-icons/fa';
const LeftSidebar = () => {
  return (
    <Container>
      <Wrapper>
        <CustomLink to="/">Home</CustomLink>
        <PublicWrapper>PUBLIC</PublicWrapper>
        <CustomLink to="/questions">
          <IconWrapper>
            <GlobeIcon>
              <FaGlobeAmericas size="18" />
            </GlobeIcon>
            Questions
          </IconWrapper>
        </CustomLink>
        <CustomLink to="/tags">Tages</CustomLink>
        <CustomLink to="/users">Users</CustomLink>
        <CustomLink to="/companies">Companies</CustomLink>
      </Wrapper>
    </Container>
  );
};

export default LeftSidebar;

const Container = styled.div`
  border-right: 1px solid hsl(210deg 8% 90%);
`;

const Wrapper = styled.div`
  padding: 24px 0 0 0;
  width: 164px;
  display: flex;
  flex-direction: column;
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
`;

const IconWrapper = styled.div`
  display: flex;
`;

const GlobeIcon = styled.div`
  padding: 0 5px 0 0;
`;
const PublicWrapper = styled.div`
  font-size: 11px;
  color: gray;
  padding: 1.5em 0.5em 0.5em 0.5em;
`;
const CustomLink = styled(Link)`
  color: gray;
  text-decoration: none;
  font-size: 13px;
  padding: 0.5em;
  :hover {
    color: black;
  }
  &:nth-child(n + 4) {
    padding: 0.5em 0.5em 0.5em 2.5em;
  }
  &:first-child {
    background-color: hsl(210deg 8% 95%);
    color: black;
    font-weight: 600;
    border-right: 3px solid hsl(27deg 90% 55%);
  }
`;
