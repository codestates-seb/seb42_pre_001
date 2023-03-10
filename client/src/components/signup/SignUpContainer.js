import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDN,
  setEmail,
  setPassword,
  setSubmit,
} from '../../slice/signUpSlice';
import { setErrorMsg1, setErrorMsg2 } from '../../slice/validationSlice';
import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';

// 회원가입
export default function SingUp() {
  axios.defaults.withCredentials = true;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const id = useRef();
  const pass = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  const signUp = async (name, email, password) => {
    const body = {
      email: email,
      password: password,
      name: name,
    };
    setIsLoading(true);
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/members/join`,
        JSON.stringify(body),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      dispatch(setSubmit());
      setIsLoading(false);
    } catch (err) {
      // 기존 회원이 존재하는 경우 에러를 받아서
      // http://localhost:3000/users/account-recovery 페이지로 이동
      navigate('/users/account-recovery?fromSignup=true');
      setIsLoading(false);
      console.log(err);
    }
  };

  const setDNVal = (e) => {
    dispatch(setDN(e.target.value));
  };

  const setEmailVal = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const setPassVal = (e) => {
    dispatch(setPassword(e.target.value));
  };

  // 유저 등록 및 유효성 검증(3가지)
  // 1.  아이디, 비밀번호 아무것도 입력 안 했을 때
  // 2. 이메일 주소 양식과 맞지 않을 때
  // 3. 비밀번호가 숫자로만 이루어지거나 영어로만 구성되어 있을 때

  const validationTest = () => {
    const emailRegex =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (state.signUp.email === '') {
      dispatch(setErrorMsg1(undefined));
    }
    if (state.signUp.password === '') {
      dispatch(setErrorMsg2(undefined));
    }

    // id를 입력한 경우
    if (state.signUp.email) {
      if (emailRegex.test(state.signUp.email)) {
        id.current.classList.remove('active');
        dispatch(setErrorMsg1(null));
      } else {
        dispatch(
          setErrorMsg1(`${state.signUp.email} is not a valid email address.`)
        );
      }
    }

    // password를 입력한 경우
    if (state.signUp.password) {
      const pass = state.signUp.password;
      const strLen = state.signUp.password.length;

      // 비밀번호에 문자만 있을 경우
      if (pass.match(/[0-9]/gi) === null) {
        dispatch(
          setErrorMsg2(
            `Please add one of the following things to make your password stronger: * number`
          )
        );
        return;
      }

      // 비밀번호에 숫자만 있을 경우
      if (pass.match(/[a-z]/gi) === null) {
        dispatch(
          setErrorMsg2(`Please add one of the following things to make your password stronger: * letter
        `)
        );
        return;
      }
      // 문자열 길이 검증
      if (strLen < 8) {
        dispatch(
          setErrorMsg2(`Must contain at least ${8 - strLen} more characters.
        `)
        );
        return;
      }
      dispatch(setErrorMsg2(null));
    }
  };

  //  회원 등록
  const registerUser = () => {
    validationTest();

    if (!state.signUp.password) {
      pass.current.classList.add('active');
      dispatch(setErrorMsg2('Password cannot be empty.'));
    }
    // id를 입력하지 않은 경우
    if (!state.signUp.email) {
      id.current.classList.add('active');
      dispatch(setErrorMsg1('Email cannot be empty.'));
    }
    if (
      state.validation.errMsg1 === null &&
      state.validation.errMsg2 === null
    ) {
      signUp(
        state.signUp.displayName,
        state.signUp.email,
        state.signUp.password
      );
    }
  };

  const activeEnter = (e) => {
    if (e.key === 'Enter') {
      registerUser();
    }
  };
  return (
    <Conatiner>
      {isLoading ? (
        <Loading />
      ) : (
        <SubConatiner>
          <SocialBtn color="white">Login in with Google</SocialBtn>
          <SocialBtn color="black">Login in with Github</SocialBtn>
          <SocialBtn color="hsl(209,100%,26%)">
            Login in with Facebook
          </SocialBtn>
          <SignUpContainer>
            <InputContainer>
              <Label>Display name</Label>
              <Input
                onKeyDown={(e) => activeEnter(e)}
                type="text"
                name="display-name"
                onChange={(e) => {
                  setDNVal(e);
                }}
              ></Input>
              <FailLabel></FailLabel>
            </InputContainer>
            <InputContainer>
              <Label>Email</Label>
              <Input
                ref={id}
                onKeyDown={(e) => activeEnter(e)}
                type="text"
                name="email"
                onChange={(e) => {
                  setEmailVal(e);
                }}
              ></Input>

              {state.validation.errMsg1 ? (
                <FailLabel>{state.validation.errMsg1}</FailLabel>
              ) : null}
            </InputContainer>
            <InputContainer>
              <Label>Password</Label>
              <Input
                ref={pass}
                onKeyDown={(e) => activeEnter(e)}
                type="password"
                name="password"
                onChange={setPassVal}
              ></Input>

              {state.validation.errMsg2 ? (
                <FailLabel>{state.validation.errMsg2}</FailLabel>
              ) : null}
            </InputContainer>

            <Text>
              Passwords must contain at least eight characters, including at
              least 1 letter and 1 number.
            </Text>
            <SignUpBtn
              type="submit"
              onClick={() => {
                registerUser();
              }}
            >
              Sign up
            </SignUpBtn>
            <Text>
              By clicking “Sign up”, you agree to our terms of service, privacy
              policy and cookie policy
            </Text>
          </SignUpContainer>
        </SubConatiner>
      )}
    </Conatiner>
  );
}

// Styled Componetns

// 페이지 묶음

const Conatiner = styled.div`
  height: 100%;
  display: flex;
  margin-top: 8%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SubConatiner = styled.div`
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// 회원가입 창 묶음
const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  width: 300px;
  height: 100%;
  padding: 24px;
  border-radius: 10px;
  margin-top: 20px;
`;
// text, input 묶음
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 15px;
  .active {
    border: 1px solid red;
  }
`;
// label label
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

// Input
const Input = styled.input`
  width: 255px;
  height: 35px;
  padding: 8px 9px 8px 9px;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  margin-top: 5px;
`;

// 회원가입 실패(Only number, Only letter, at least eight Characters)
// const fail = styled.input`
//   width: 335px;
//   height: 30px;
//   padding: 8px 9px 8px 9px;
//   border: 1px solid;
//   border-radius: 5px;
//   font-size: 18px;
// `;

// 텍스트
const Text = styled.div`
  font-size: 15px;
  margin-top: 10px;
`;

// 회원가입 버튼
const SignUpBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 255px;
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
// 소셜 로그인 버튼
const SocialBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 40px;
  margin: 6px 0 6px 0;
  padding: 8px 9px 8px 9px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  color: ${(props) => (props.color === 'white' ? 'black' : 'white')};
  font-size: 15px;
  border: 1px solid lightgray;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;
