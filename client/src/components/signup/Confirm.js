import { BsCheckLg } from 'react-icons/bs';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export default function SignUpConfirm() {
  const location = useLocation();
  const url = `${location.pathname}${location.search}`;
  console.log(url);
  useEffect(() => {
    getRequest();
  }, []);

  const getRequest = async () => {
    try {
      // 요청 경로 : http://localhost:8080/pwChange/registerEmail?쿼리^%$^@#!@$#@%
      const response = axios.get(`http://localhost:8080${url}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      console.log(response);
      alert('회원가입이 완료되었습니다.');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Conatiner>
      <Text>
        <BsCheckLg size="50" color="#27ae60"></BsCheckLg>ㅤ
        <Paragraph>Registration is Completed!!</Paragraph>
      </Text>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 30;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 25px;
`;
const Paragraph = styled.p`
  margin: 10px 0 0 0;
  font-size: 30px;
  padding-right: 30px;
`;
