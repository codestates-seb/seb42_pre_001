import styled from 'styled-components';
import LeftSidebar from '../components/inquiry/LeftSidebar';
import QuestionList from '../components/inquiry/QuestionList';
import QuestionSidebar from '../components/inquiry/QuestionSidebar';

const Home = () => {
  return (
    <HomeContainer>
      <LeftSidebar pageName="home" />
      <HomeContentContainer>
        <QuestionList name="Top Questions"></QuestionList>
        <QuestionSidebar></QuestionSidebar>
      </HomeContentContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HomeContentContainer = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  display: flex;
  flex-direction: row;
`;
