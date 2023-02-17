import { Link } from 'react-router-dom';
import styled from 'styled-components';

const QuestionListTop = ({ name }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <AskLink to="/questions/ask">
        <AskBtn>Ask Question</AskBtn>
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
  height: 100px;
  border-bottom: 1px solid hsl(210deg 8% 90%);
`;

const Title = styled.span`
  font-size: 27px;
`;
const AskLink = styled(Link)`
  text-decoration: none;
  display: flex;
`;

const AskBtn = styled.button`
  align-items: center;
  border-style: none;
  border-radius: 5%;
  background-color: hsl(206deg 100% 52%);
  color: white;
  padding: 10px;
  height: 40px;

  :hover {
    filter: brightness(0.9);
  }
`;
