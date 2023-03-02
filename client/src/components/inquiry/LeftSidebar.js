import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaGlobeAmericas } from 'react-icons/fa';
const LeftSidebar = ({ text, pageName }) => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    if (text) {
      if (confirm('변경사항이 저장되지 않을 수 있습니다.')) {
        navigate('/');
      } else {
        return false;
      }
    } else {
      navigate('/');
    }
  };
  const handleQuestionsClick = () => {
    if (text) {
      if (confirm('변경사항이 저장되지 않을 수 있습니다.')) {
        navigate('/questions');
      } else {
        return false;
      }
    } else {
      navigate('/questions');
    }
  };
  const handleTagsClick = () => {
    if (text) {
      if (confirm('변경사항이 저장되지 않을 수 있습니다.')) {
        navigate('/tags');
      } else {
        return false;
      }
    } else {
      navigate('/tags');
    }
  };
  const handleUsersClick = () => {
    if (text) {
      if (confirm('변경사항이 저장되지 않을 수 있습니다.')) {
        navigate('/users');
      } else {
        return false;
      }
    } else {
      navigate('/users');
    }
  };
  const handleCompaniesClick = () => {
    if (text) {
      if (confirm('변경사항이 저장되지 않을 수 있습니다.')) {
        navigate('/companies');
      } else {
        return false;
      }
    } else {
      navigate('/companies');
    }
  };
  return (
    <Container>
      <Wrapper>
        {pageName === 'home' ? (
          <FocusWrapper onClick={handleHomeClick}>Home</FocusWrapper>
        ) : (
          <LinkBox onClick={handleHomeClick}>Home</LinkBox>
        )}
        <PublicWrapper>PUBLIC</PublicWrapper>
        {pageName === 'questions' ? (
          <FocusWrapper onClick={handleQuestionsClick}>
            <IconWrapper>
              <GlobeIcon>
                <FaGlobeAmericas size="18" />
              </GlobeIcon>
              Questions
            </IconWrapper>
          </FocusWrapper>
        ) : (
          <LinkBox onClick={handleQuestionsClick}>
            <IconWrapper>
              <GlobeIcon>
                <FaGlobeAmericas size="18" />
              </GlobeIcon>
              Questions
            </IconWrapper>
          </LinkBox>
        )}
        {pageName === 'tages' ? (
          <FocusWrapper onClick={handleTagsClick}>Tags</FocusWrapper>
        ) : (
          <LinkBox onClick={handleTagsClick}>Tags</LinkBox>
        )}
        {pageName === 'users' ? (
          <FocusWrapper onClick={handleUsersClick}>Users</FocusWrapper>
        ) : (
          <LinkBox onClick={handleUsersClick}>Users</LinkBox>
        )}
        {pageName === 'companies' ? (
          <FocusWrapper onClick={handleCompaniesClick}>Companies</FocusWrapper>
        ) : (
          <LinkBox onClick={handleCompaniesClick}>Companies</LinkBox>
        )}
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
  top: 50px;
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
const LinkBox = styled.div`
  color: gray;
  text-decoration: none;
  font-size: 13px;
  padding: 0.5em;
  cursor: pointer;
  :hover {
    color: black;
  }
  &:nth-child(n + 4) {
    padding: 0.5em 0.5em 0.5em 2.5em;
  }
`;
const FocusWrapper = styled.div`
  text-decoration: none;
  font-size: 13px;
  padding: 0.5em;
  cursor: pointer;
  :hover {
    color: black;
  }
  background-color: hsl(210deg 8% 95%);
  color: black;
  font-weight: 600;
  border-right: 3px solid hsl(27deg 90% 55%);
  &:nth-child(n + 4) {
    padding: 0.5em 0.5em 0.5em 2.5em;
  }
`;
