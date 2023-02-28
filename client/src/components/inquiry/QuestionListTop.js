import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainButton from '../MainButton';
const QuestionListTop = ({ name }) => {
  const { isLogin } = useSelector((state) => state.login);

  return (
    <Container>
      <Title>{name}</Title>
      <AskLink to={isLogin ? '/questions/ask' : '/users/login'}>
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
  height: 100px;
  border-bottom: 1px solid hsl(210deg 8% 90%);
`;
const Title = styled.span`
  font-size: 27px;
  color: hsl(210deg 8% 15%);
`;
const AskLink = styled(Link)`
  text-decoration: none;
  display: flex;
`;
