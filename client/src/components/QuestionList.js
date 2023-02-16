import styled from 'styled-components';
import QuestionsItems from './QuestionItem';
import QuestionListTop from './QuestionListTop';

const QuestionList = ({ name }) => {
  return (
    <QuestionListContainer>
      <QuestionListTop name={name}></QuestionListTop>
      <QuestionsItems></QuestionsItems>
    </QuestionListContainer>
  );
};

export default QuestionList;

const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
