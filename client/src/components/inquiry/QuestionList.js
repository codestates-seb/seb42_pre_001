import styled from 'styled-components';
import QuestionsItem from './QuestionItem';
import QuestionListTop from './QuestionListTop';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';

const QuestionList = ({ name }) => {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState([]);
  const { num } = useParams();
  const apiUrl = num
    ? `http://localhost:8080/questions?page=${num}&size=10`
    : `http://localhost:8080/questions?page=1&size=10`;
  useEffect(() => {
    const getQuestions = async () => {
      const response = await axios.get(apiUrl);
      const { data } = response;
      setQuestions(data.data);
      setPage(
        Array.from(Array(data.pageInfo.totalPages)).map((el, idx) => idx + 1)
      );
    };
    getQuestions();
  }, [num]);
  return (
    <Container>
      <QuestionListTop name={name}></QuestionListTop>
      {questions.map((el, idx) => (
        <QuestionsItem key={idx} question={el}></QuestionsItem>
      ))}
      <PaginationContainer>
        {page.map((el, idx) => (
          <Pagination key={idx} pageNum={el} num={num} />
        ))}
      </PaginationContainer>
    </Container>
  );
};

export default QuestionList;

const Container = styled.div`
  width: 727px;
  display: flex;
  flex-direction: column;
`;
const PaginationContainer = styled.div`
  display: flex;
  padding: 80px 10px 40px 10px;
`;
