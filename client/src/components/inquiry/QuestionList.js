import styled from 'styled-components';
import QuestionsItem from './QuestionItem';
import QuestionListTop from './QuestionListTop';
import { useEffect, useState } from 'react';
import axios from 'axios';

const QuestionList = ({ name }) => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const getQuestions = async () => {
      const response = await axios.get(
        'https://preproject-3ea3e-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json'
      );
      const { data } = response;
      setQuestions(data);
    };
    getQuestions();
  }, [questions]);

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
