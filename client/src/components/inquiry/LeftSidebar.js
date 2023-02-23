import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaGlobeAmericas } from 'react-icons/fa';
const LeftSidebar = ({ text }) => {
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
  const handleTagesClick = () => {
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
        <LickBox onClick={handleHomeClick}>Home</LickBox>
        <PublicWrapper>PUBLIC</PublicWrapper>
        <LickBox onClick={handleQuestionsClick}>
          <IconWrapper>
            <GlobeIcon>
              <FaGlobeAmericas size="18" />
            </GlobeIcon>
            Questions
          </IconWrapper>
        </LickBox>
        <LickBox onClick={handleTagesClick}>Tages</LickBox>
        <LickBox onClick={handleUsersClick}>Users</LickBox>
        <LickBox onClick={handleCompaniesClick}>Companies</LickBox>
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
const LickBox = styled.div`
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
  &:first-child {
    background-color: hsl(210deg 8% 95%);
    color: black;
    font-weight: 600;
    border-right: 3px solid hsl(27deg 90% 55%);
  }
`;
