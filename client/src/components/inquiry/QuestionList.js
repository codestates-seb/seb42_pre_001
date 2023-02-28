import styled from 'styled-components';
import QuestionsItem from './QuestionItem';
import QuestionListTop from './QuestionListTop';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';
import PaginationController from './PaginationController';
import Loading from '../Loading';
import { useCookies } from 'react-cookie';

const QuestionList = ({ name, tab }) => {
  const [questions, setQuestions] = useState([]);
  const [totalPage, setTotalPage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 5;
  const { num } = useParams();
  const [cookie, setCookie] = useCookies();
  const apiUrl = num
    ? `${process.env.REACT_APP_API_URL}/questions?page=${num}&size=10&tab=${tab}`
    : `${process.env.REACT_APP_API_URL}/questions?page=1&size=10&tab=${tab}`;

  useEffect(() => {
    const getQuestions = async () => {
      if (cookie.accessToken && cookie.refreshToken) {
        try {
          const response = await axios.get(apiUrl, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: cookie.accessToken,
              Refresh: cookie.refreshToken,
            },
            withCredentials: true,
          });
          const { data } = response;
          setQuestions(data.data);
          setTotalPage(data.pageInfo.totalPages);
          setOffset(num ? Math.floor((num - 1) / limit) * limit : 0);
          setPage(
            Array.from(Array(data.pageInfo.totalPages))
              .map((el, idx) => idx + 1)
              .slice(offset, offset + limit)
          );
          setIsLoading(false);
          if (!cookie.loginMember) {
            setCookie('loginMemberId', Number(data.loginMember.memberId));
            setCookie('loginMemberName', data.loginMember.name);
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          const response = await axios.get(apiUrl);
          const { data } = response;
          setQuestions(data.data);
          setTotalPage(data.pageInfo.totalPages);
          setOffset(num ? Math.floor((num - 1) / limit) * limit : 0);
          setPage(
            Array.from(Array(data.pageInfo.totalPages))
              .map((el, idx) => idx + 1)
              .slice(offset, offset + limit)
          );
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
    };
    getQuestions();
  }, [num, offset]);
  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <QuestionListTop name={name}></QuestionListTop>
      {questions.map((el, idx) => (
        <QuestionsItem key={idx} question={el}></QuestionsItem>
      ))}
      <PaginationContainer>
        {num > 1 ? <PaginationController name="Prev" num={num} /> : null}
        {page.map((el, idx) => (
          <Pagination key={idx} pageNum={el} num={num} />
        ))}
        {totalPage > num ? (
          <PaginationController name="Next" num={num} />
        ) : null}
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
