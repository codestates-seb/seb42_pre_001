import styled from 'styled-components';
import QuestionsItems from './QuestionItem';
import QuestionListTop from './QuestionListTop';

const QuestionList = ({ name }) => {
  return (
    <Container>
      <QuestionListTop name={name}></QuestionListTop>
      <QuestionsItems></QuestionsItems>
    </Container>
  );
};

export default QuestionList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
