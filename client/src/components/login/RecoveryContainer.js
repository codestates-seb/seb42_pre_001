import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setNewPass, setNewPassConfirm } from '../../slice/loginSlice';
import { setErrorMsg6, setErrorMsg7 } from '../../slice/validationSlice';
import LeftSidebar from '../inquiry/LeftSidebar';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRef } from 'react';

export default function Recovery() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  const location = useLocation();
  const newPass = useRef();
  //patch url 넘겨주기 body 에는 pass
  const search = `${location.search}`;
  const url = `${location.pathname}${location.search}`;

  const email = [search.split('&')[0].slice(7)];

  const updatePass = async (pass) => {
    const body = {
      pass: pass,
    };
    try {
      // 요청 경로 : http://localhost:8080/pwChange/registerEmail?쿼리^%$^@#!@$#@%
      axios.patch(
        `${process.env.REACT_APP_API_URL}${url}`,
        JSON.stringify(body),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const checkPass = () => {
    validationTest();

    if (!state.validation.errMsg6) {
      newPass.current.classList.remove('active');
    }
  };

  const setNewPassVal = (e) => {
    dispatch(setNewPass(e.target.value));
  };

  const setPassConfirmVal = (e) => {
    dispatch(setNewPassConfirm(e.target.value));
  };

  const validationTest = () => {
    if (state.login.newPass === '') {
      dispatch(setErrorMsg6(undefined));
    }
    if (state.login.newPassConfirm === '') {
      dispatch(setErrorMsg7(undefined));
    }

    // password를 입력한 경우
    if (state.login.newPass) {
      const pass = state.login.newPass;
      const strLen = state.login.newPass.length;

      // 비밀번호에 문자만 있을 경우
      if (pass.match(/[0-9]/gi) === null) {
        newPass.current.classList.add('active');
        dispatch(
          setErrorMsg6(
            `Please add one of the following things to make your password stronger: * number`
          )
        );
        return;
      }

      // 비밀번호에 숫자만 있을 경우
      if (pass.match(/[a-z]/gi) === null) {
        newPass.current.classList.add('active');
        dispatch(
          setErrorMsg6(`Please add one of the following things to make your password stronger: * letter
        `)
        );
        return;
      }
      // 문자열 길이 검증
      if (strLen < 8) {
        newPass.current.classList.add('active');
        dispatch(
          setErrorMsg6(`Must contain at least ${8 - strLen} more characters.
        `)
        );
        return;
      }
      dispatch(setErrorMsg6(null));
      updatePass(state.login.newPass);
    }
  };

  const activeEnter = (e) => {
    if (e.key === 'Enter') {
      updatePass(state.login.newPass);
    }
  };

  return (
    <HomeContainer>
      <LeftSidebar></LeftSidebar>
      <RecoveryContainer>
        <Main>
          <ContentContainer>
            <Title>Account Recovery</Title>
            <Text1>Recover account for {email}</Text1>
            <InputContainer>
              <Label>New password</Label>
              <Input
                ref={newPass}
                type="password"
                name="password"
                onKeyDown={(e) => activeEnter(e)}
                onChange={setNewPassVal}
              ></Input>
              {state.validation.errMsg6 ? (
                <FailLabel>{state.validation.errMsg6}</FailLabel>
              ) : null}
            </InputContainer>
            <InputContainer>
              <Label>New password(again)</Label>
              <Input
                type="password"
                name="password"
                onKeyDown={(e) => activeEnter(e)}
                onChange={setPassConfirmVal}
              ></Input>
            </InputContainer>
            <Text2>
              Passwords must contain at least eight characters, including at
              least 1 letter and 1 number.
            </Text2>
            <RecoverBtn onClick={checkPass}>Recover Account</RecoverBtn>
          </ContentContainer>
        </Main>
      </RecoveryContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Main = styled.div`
  width: 100px;
  height: 100px;
`;

const RecoveryContainer = styled.div`
  max-width: 1100px;
  min-width: 600px;
  width: calc(100% - 164px);
  display: flex;
  flex-direction: row;
  padding: 25px;
`;

const ContentContainer = styled.div`
  min-width: 1000px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 15px;
`;

const Title = styled.div`
  font-size: 28px;
  width: 1000px;
  font-weight: 500;
  margin: 15px 0 25px 0;
  padding: 0 0 10px 0;
  border-bottom: 1px solid hsl(210, 8%, 85%);
`;

const Text1 = styled.div`
  margin: 0 0 3px 3px;
  width: 950px;
  font-size: 16px;
  line-height: 35px;
`;

const Text2 = styled.div`
  width: 300px;
  font-size: 13px;
  margin-top: 10px;
  color: gray;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 15px;
  .active {
    border: 1px solid red;
  }
`;
const Input = styled.input`
  width: 300px;
  height: 35px;
  padding: 8px 9px 8px 9px;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  margin-top: 5px;
`;

const Label = styled.label`
  margin-left: 3px;
  width: 300px;
  font-size: 16px;
  font-weight: 700;
`;

const FailLabel = styled.div`
  width: 250px;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: red;
  margin-top: 5px;
`;

const RecoverBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 38px;
  padding: 8px 9px 8px 9px;
  background-color: hsl(206, 100%, 52%);
  border-radius: 3px;
  color: white;
  font-size: 15px;
  margin-top: 15px;
  :hover {
    background-color: hsl(206, 100%, 42%);
    cursor: pointer;
  }
`;
