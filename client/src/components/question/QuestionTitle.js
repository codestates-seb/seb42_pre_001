import styled from 'styled-components';
import MainButton from '../MainButton';
import { Link } from 'react-router-dom';
const QuestionTitle = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Link to="/questions/ask">
        <MainButton buttonText="Ask Question" />
      </Link>
    </Container>
  );
};
export default QuestionTitle;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  border-bottom: 1px solid hsl(210deg 8% 90%);
`;

const Title = styled.div`
  color: hsl(210deg 8% 25%);
  font-size: 27px;
  word-wrap: break-word;
`;
