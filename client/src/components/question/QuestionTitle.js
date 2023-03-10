import styled from 'styled-components';
import MainButton from '../MainButton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllTags } from '../../slice/questionSlice';
const QuestionTitle = ({ title }) => {
  const { isLogin } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const resetTags = () => {
    dispatch(setAllTags([]));
  };
  return (
    <Container>
      <Title>{title}</Title>
      <Link to={isLogin ? '/questions/ask' : '/users/login'}>
        <MainButton buttonText="Ask Question" functionHandler={resetTags} />
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
  width: 938px;
  color: hsl(210deg 8% 25%);
  font-size: 27px;
  word-wrap: break-word;
`;
