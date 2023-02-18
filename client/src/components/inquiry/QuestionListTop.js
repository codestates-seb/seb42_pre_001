import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainButton from '../MainButton';

const QuestionListTop = ({ name }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <AskLink to="/questions/ask">
        <MainButton buttonText="Ask Question" />
      </AskLink>
    </Container>
  );
};

export default QuestionListTop;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  height: 150px;
  border-bottom: 1px solid hsl(210deg 8% 90%);
`;

const Title = styled.span`
  font-size: 27px;
`;
const AskLink = styled(Link)`
  text-decoration: none;
  display: flex;
`;
