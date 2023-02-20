import styled from 'styled-components';
import QuestionsItem from './QuestionItem';
import QuestionListTop from './QuestionListTop';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpFetch } from '../../slice/questionSlice';
import { useEffect } from 'react';

const QuestionList = ({ name }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncUpFetch());
  }, []);

  const questions = useSelector((state) => {
    return state.question.questions;
  });

  return (
    <Container>
      <QuestionListTop name={name}></QuestionListTop>
      {questions.map((el, idx) => (
        <QuestionsItem key={idx} question={el}></QuestionsItem>
      ))}
    </Container>
  );
};

export default QuestionList;

const Container = styled.div`
  width: 727px;
  display: flex;
  flex-direction: column;
`;
