import styled from 'styled-components';

const AnswerCount = ({ answers }) => {
  return answers.length ? (
    <Container>{answers.length} Answer</Container>
  ) : (
    <QuestionBottom>
      {`Know someone who can answer?Share a link to this `}
      <QuestionBottomAsk>{`question`}</QuestionBottomAsk>
      {` via `} <QuestionBottomAsk>{`email`}</QuestionBottomAsk>
      {`,`}
      <QuestionBottomAsk>{`Twitter`}</QuestionBottomAsk>
      {`, or `} <QuestionBottomAsk>{`Facebook`}</QuestionBottomAsk>
      {`.`}
    </QuestionBottom>
  );
};
export default AnswerCount;

const Container = styled.div`
  margin-bottom: 8px;
  font-size: 19px;
`;
const QuestionBottom = styled.span`
  margin-top: 15px;
  font-size: 17px;
`;
const QuestionBottomAsk = styled.span`
  margin-top: 15px;
  font-size: 17px;
  color: hsl(206deg 100% 40%);
  cursor: pointer;
  :hover {
    color: hsl(206deg 100% 52%);
  }
  :visited {
    text-decoration: none;
  }
`;
