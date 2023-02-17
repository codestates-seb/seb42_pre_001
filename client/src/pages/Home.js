import styled from 'styled-components';
import LeftSidebar from '../components/Inquiry/LeftSidebar';
import QuestionList from '../components/Inquiry/QuestionList';
import QuestionSidebar from '../components/Inquiry/QuestionSidebar';

const Home = () => {
  return (
    <HomeContainer>
      <LeftSidebar />
      <HomeContentContainer>
        <QuestionList name="Top Questions"></QuestionList>
        <QuestionSidebar></QuestionSidebar>
      </HomeContentContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  height: 150vh;
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
