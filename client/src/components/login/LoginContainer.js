import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  setId,
  setPassword,
  setUserInfo,
  setIsLogin,
} from '../../slice/loginSlice';
import { useCookies } from 'react-cookie';
import { setErrorMsg3, setErrorMsg4 } from '../../slice/validationSlice';
import stack from '../../assets/stack.png';
import axios from 'axios';
import { useRef } from 'react';

export default function Login() {
  axios.defaults.withCredentials = true;

  const id = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  console.log(state);
  // 로그인 POST 요청 => 유저 인증 성공 시 access, refresh 토큰을 쿠키에 저장
  const login = async (userName, pass) => {
    const body = {
      userName: userName,
      pass: pass,
    };
    try {
      const response = await axios.post(
        'http://localhost:8080/login',
        JSON.stringify(body),
        {
          headers: {
            'Content-Type': 'application/json',
          },

          withCredentials: true,
        }
      );
      const { data, headers } = response;
      const accessToken = headers['authorization'];
      const refreshToken = headers['refresh'];
      if (!cookies.authorization) {
        setCookie('accessToken', accessToken);
      }
      if (!cookies.authorization) {
        setCookie('refreshToken', refreshToken);
      }

      dispatch(setIsLogin(true));
      console.log('data', response);
      dispatch(setUserInfo(data));

      loginHandler();
    } catch (err) {
      console.log(err);
      id.current.classList.add('active');
      dispatch(setErrorMsg3('The email or password is incorrect.'));
    }
  };

  const activeEnter = (e) => {
    if (e.key === 'Enter') {
      checkUser(state.login.id, state.login.password);
    }
  };

  // 로그인 성공 시 Home 화면으로 이동
  const loginHandler = () => {
    dispatch(setErrorMsg3(null));
    navigate('/');
  };

  // input value를 state로 저장
  const setIdVal = (e) => {
    dispatch(setId(e.target.value));
  };

  // input value를 state로 저장
  const setPassVal = (e) => {
    dispatch(setPassword(e.target.value));
  };

  //아이디, 패스워드 확인
  const checkUser = (id, pass) => {
    validationTest();
    console.log(state);
    if (state.login.userInfo) {
      dispatch(setId(undefined));
      dispatch(setPassword(undefined));
    }
    login(id, pass);
  };

  // validation
  const validationTest = () => {
    const emailRegex =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    // id를 입력하지 않은 경우
    if (!state.login.id) {
      id.current.classList.add('active');
      dispatch(setErrorMsg3('Email cannot be empty.'));
    }
    // id를 입력한 경우
    if (state.login.id) {
      // 이메일 형식 검증
      if (emailRegex.test(state.login.id)) {
        id.current.classList.remove('active');
        dispatch(setErrorMsg3(0));
      } else {
        id.current.classList.add('active');
        dispatch(setErrorMsg3(`The email is not a valid email address.`));
      }
    }
    // password를 입력하지 않은 경우
    if (!state.login.password) {
      password.current.classList.add('active');
      dispatch(setErrorMsg4('Password cannot be empty.'));
    } else {
      password.current.classList.remove('active');
      dispatch(setErrorMsg4(0));
    }
  };

  return (
    <Conatiner>
      <Image src={stack} />
      <SocialBtn color="white">Login in with Google</SocialBtn>
      <SocialBtn color="black">Login in with Github</SocialBtn>
      <SocialBtn color="hsl(209,100%,26%)">Login in with Facebook</SocialBtn>
      <LoginContainer>
        <InputContainer>
          <Label type="text" name="email">
            Email
          </Label>
          <Input
            ref={id}
            onKeyDown={(e) => activeEnter(e)}
            onChange={setIdVal}
          ></Input>
          {state.validation.errMsg3 ? (
            <FailLabel>{state.validation.errMsg3}</FailLabel>
          ) : null}
        </InputContainer>
        <InputContainer>
          <div className="container">
            <Label>Password</Label>
            <Link to="/users/account-recovery">
              <PassLabel>Forgot password?</PassLabel>
            </Link>
          </div>
          <Input
            ref={password}
            onKeyDown={(e) => activeEnter(e)}
            type="password"
            name="password"
            onChange={setPassVal}
          ></Input>

          {state.validation.errMsg4 ? (
            <FailLabel>{state.validation.errMsg4}</FailLabel>
          ) : null}
        </InputContainer>

        <LoginBtn
          onClick={() => checkUser(state.login.id, state.login.password)}
        >
          Log in
        </LoginBtn>
      </LoginContainer>
      <SingUp>
        Don’t have an account?
        <Link to="/users/signup">ㅤSign up</Link>
      </SingUp>
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
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 300px;
  height: 250px;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;
// text, input 묶음
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 80px;
  margin-left: 45px;
  .container {
    display: flex;
    width: 150px;
  }
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
// 비밀번호 찾기 label
const PassLabel = styled.label`
  position: absolute;
  font-size: 14px;
  padding-top: 3px;
  color: hsl(206, 100%, 40%);
  cursor: pointer;
`;
// Input태그
const Input = styled.input`
  width: 255px;
  height: 35px;
  padding: 8px 9px 8px 9px;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  margin-top: 5px;
`;

const FailLabel = styled.div`
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: red;
  margin-top: 5px;
`;

// 로그인 버튼
const LoginBtn = styled.div`
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

const SingUp = styled.label`
  display: flex;
  margin-top: 35px;
  font-size: 15px;
  text-decoration: none;
  :hover {
    background-color: ${(props) => props};
  }
`;

const Image = styled.img`
  width: 32px;
  height: 42px;
  margin-bottom: 15px;
`;
