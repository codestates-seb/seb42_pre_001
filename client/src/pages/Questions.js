import styled from 'styled-components';
import Footer from '../components/Footer';
import LeftSidebar from '../components/inquiry/LeftSidebar';
import QuestionList from '../components/inquiry/QuestionList';
import QuestionSidebar from '../components/inquiry/QuestionSidebar';

const Questions = () => {
  return (
    <>
      <QuestionsContainer>
        <LeftSidebar />
        <QuestionsContentContainer>
          <QuestionList name="All Questions"></QuestionList>
          <QuestionSidebar></QuestionSidebar>
        </QuestionsContentContainer>
      </QuestionsContainer>
      <Footer />
    </>
  );
};

export default Questions;

const QuestionsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const QuestionsContentContainer = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  display: flex;
  flex-direction: row;
`;
