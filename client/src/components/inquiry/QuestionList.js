import styled from 'styled-components';
import QuestionsItem from './QuestionItem';
import QuestionListTop from './QuestionListTop';
import { useEffect, useState } from 'react';
import axios from 'axios';

const QuestionList = ({ name }) => {
  const [questions, setQuestions] = useState([]);
  const apiUrl = `http://localhost:8080/questions?page=1&size=10`;
  useEffect(() => {
    const getQuestions = async () => {
      const response = await axios.get(apiUrl);
      const { data } = response;
      setQuestions(data.data);
      console.log(data.data);
    };
    getQuestions();
  }, []);

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
