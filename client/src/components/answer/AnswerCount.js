import styled from 'styled-components';

const AnswerCount = ({ length }) => {
  return <Container>{length} Answer</Container>;
};
export default AnswerCount;

const Container = styled.div`
  margin-bottom: 8px;
  font-size: 19px;
`;
