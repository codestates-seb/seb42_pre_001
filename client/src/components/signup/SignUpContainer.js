import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDM,
  setEmail,
  setPassword,
  setSubmit,
} from '../../slice/signUpSlice';
import { setErrorMsg1, setErrorMsg2 } from '../../slice/validationSlice';
import { useEffect } from 'react';

// 회원가입
export default function SingUp() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  const setDMVal = (e) => {
    dispatch(setDM(e.target.value));
  };

  const setEmailVal = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const setPassVal = (e) => {
    dispatch(setPassword(e.target.value));
  };

  useEffect(() => {
    validationTest();
  }, [state]);

  // 유저 등록 및 유효성 검증(3가지)
  // 1.  아이디, 비밀번호 아무것도 입력 안 했을 때
  // 2. 이메일 주소 양식과 맞지 않을 때
  // 3. 비밀번호가 숫자로만 이루어지거나 영어로만 구성되어 있을 때

  const validationTest = () => {
    const emailRegex =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    // id를 입력하지 않은 경우
    if (state.signUp.email === null) {
      dispatch(setErrorMsg1('Email cannot be empty.'));
    }
    // id를 입력한 경우
    if (state.signUp.email) {
      if (emailRegex.test(state.signUp.email)) {
        dispatch(setErrorMsg1(0));
      } else {
        dispatch(
          setErrorMsg1(`${state.signUp.email} is not a valid email address.`)
        );
      }
    }

    // password를 입력하지 않은 경우
    if (state.signUp.password === null) {
      dispatch(setErrorMsg2('Password cannot be empty.'));
      return;
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
    }
    dispatch(setErrorMsg2(0));
  };

  const resigerUser = () => {
    if (state.validation.errMsg1 === 0 && state.validation.errMsg2 === 0) {
      dispatch(setSubmit());
    }
  };
  console.log('state', state.validation);
  console.log('state', state.signUp.email);

  return (
    <Conatiner>
      <SocialBtn color="white">Login in with Google</SocialBtn>
      <SocialBtn color="black">Login in with Github</SocialBtn>
      <SocialBtn color="hsl(209,100%,26%)">Login in with Facebook</SocialBtn>
      <SignUpContainer>
        <form>
          <InputContainer>
            <Label>Display name</Label>
            <Input
              type="text"
              name="display-name"
              onChange={(e) => {
                setDMVal(e);
              }}
            ></Input>
            <FailLabel></FailLabel>
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>
            <Input
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
              type="password"
              name="password"
              onChange={setPassVal}
            ></Input>

            {state.validation.errMsg2 ? (
              <FailLabel>{state.validation.errMsg2}</FailLabel>
            ) : null}
          </InputContainer>

          <Text>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </Text>
          <SignUpBtn
            type="submit"
            onClick={() => {
              resigerUser();
            }}
          >
            Sign up
          </SignUpBtn>
        </form>
        <Text>
          By clicking “Sign up”, you agree to our terms of service, privacy
          policy and cookie policy
        </Text>
      </SignUpContainer>
    </Conatiner>
  );
}

// Styled Componetns

// 페이지 묶음
const Conatiner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// 로그인 창 묶음
const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  width: 300px;
  height: 500px;
  padding: 24px;
  border-radius: 10px;
  margin-top: 20px;
`;
// text, input 묶음
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 80px;
`;
// label label
const Label = styled.label`
  margin-left: 3px;
  width: 300px;
  font-size: 16px;
  font-weight: 700;
`;

const FailLabel = styled.div`
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  color: red;
  margin-top: 5px;
`;

// 비밀번호 찾기 label
// const PassLabel = styled.label`
//   font-size: 18px;
//   margin-left: 125px;
//   color: hsl(206, 100%, 40%);
//   margin-top: 50px;
//   left: 400px;
// `;

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
