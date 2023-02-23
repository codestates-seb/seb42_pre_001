import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setEmailForPass } from '../../slice/loginSlice';
import { setErrorMsg5 } from '../../slice/validationSlice';
import { useRef } from 'react';
// import { useEffect } from 'react';
import axios from 'axios';
// import { useCookies } from 'react-cookie';
import Complete from './Complete';
export default function Login() {
  const inputRef = useRef();

  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  console.log(state);
  const navigate = useNavigate();
  //   const [cookies, setCookie] = useCookies();
  //   useEffect(() => {

  //   }, [state.login]);

  // 로그인 POST 요청 => 유저 인증 성공 시 access, refresh 토큰을 쿠키에 저장
  const SendEmail = async (email) => {
    const body = {
      email: email,
    };
    try {
      const response = await axios.post(
        // 'http://localhost:8080/login',
        JSON.stringify(body),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const validationTest = () => {
    const emailRegex =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (state.login.emailForPass === '') {
      dispatch(setErrorMsg5(undefined));
    }

    // id를 입력한 경우
    if (state.login.emailForPass) {
      if (emailRegex.test(state.login.emailForPass)) {
        inputRef.current.classList.remove('active');

        dispatch(setErrorMsg5(0));
      } else {
        inputRef.current.classList.add('active');
        dispatch(setErrorMsg5(`Invalid email address`));
      }
    }
  };

  const activeEnter = (e) => {
    if (e.key === 'Enter') {
      validationTest();
      SendEmail();
    }
  };

  const sendEmailHandler = () => {
    validationTest();
    navigate('/users/account-recovery');
  };

  // input value를 state로 저장
  const setEmailVal = (e) => {
    dispatch(setEmailForPass(e.target.value));
  };

  return (
    <Conatiner>
      {state.validation.errMsg5 === 0 ? (
        <Complete />
      ) : (
        <PassFindContainer>
          <Text>
            Forgot your account’s password? Enter your email address and we’ll
            send you a recovery link.
          </Text>
          <InputContainer>
            <Label type="text" name="email">
              Email
            </Label>

            <Input
              ref={inputRef}
              onKeyDown={(e) => activeEnter(e)}
              onChange={setEmailVal}
            ></Input>
            {state.validation.errMsg5 ? (
              <FailLabel>{state.validation.errMsg5}</FailLabel>
            ) : null}
            <SendEmailBtn onClick={() => sendEmailHandler()}>
              Send Recovery email
            </SendEmailBtn>
          </InputContainer>
        </PassFindContainer>
      )}
    </Conatiner>
  );
}

// 페이지 묶음
const Conatiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 로그인 창 묶음
const PassFindContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  width: 330px;
  height: auto;
  padding: 0 20px 20px 20px;
  border-radius: 10px;
  margin-top: 20px;
`;
// text, input 묶음
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 330px;
  height: 120px;
  margin: 0 0 0 45px;
  .container {
    display: flex;
    width: 150px;
  }
  .active {
    border: 1px solid red;
    /* background-image: url('../../assets/exclamationCircle.png'); */
    /* background-image: url('https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/91376527_106875534303200_8598954766350942208_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=y7bXeUuDvxQAX8VwOyr&_nc_ht=scontent-ssn1-1.xx&oh=00_AfAoyGybf90qsN3Q6c8RV9wAwLHrFsRuywHLNCdhXmUG-g&oe=641E547F'); */
    /* background-position: 5px center;
    background-repeat: no-repeat; */
  }
`;

// text
const Text = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 0 20px 0 30px;
  margin: 20px 0 0 12px;
  width: 350px;
  height: 50px;
  font-size: 15px;
`;

// label label
const Label = styled.label`
  margin-left: 3px;
  width: 350px;
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
`;

// Input태그
const Input = styled.input`
  width: 285px;
  height: 35px;
  padding: 8px 9px 8px 9px;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  margin-top: 5px;
`;

const SendEmailBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 285px;
  height: 38px;
  padding: 8px 9px 8px 9px;
  background-color: hsl(206, 100%, 52%);
  border-radius: 3px;
  color: white;
  font-size: 15px;
  margin-top: 10px;
  :hover {
    background-color: hsl(206, 100%, 42%);
    cursor: pointer;
  }
`;
const FailLabel = styled.div`
  width: 250px;
  height: 10px;
  font-size: 14px;
  color: red;
  margin-top: 5px;
`;
