import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setId, setPassword } from '../../slice/loginSlice';
import stack from '../../assets/stack.png';

export default function Login() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.login;
  });
  const navigate = useNavigate();

  // 로그인 성공 시 Home 화면으로 이동
  const loginHandler = () => {
    navigate('/');
    alert('로그인에 성공했습니다.');
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
    if (id === 'abc@gmail.com' && pass === '1234') {
      loginHandler();
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  return (
    <Conatiner>
      <Image src={stack} />
      <SocialBtn color="white">Login in with Google</SocialBtn>
      <SocialBtn color="black">Login in with Github</SocialBtn>
      <SocialBtn color="hsl(209,100%,26%)">Login in with Facebook</SocialBtn>
      <LoginContainer>
        <form>
          <InputContainer>
            <Label type="text" name="email">
              Email
            </Label>
            <Input onChange={setIdVal}></Input>
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            {/* <Link to="/users/account-recovery"> */}
            {/* <PassLabel>Forgot password?</PassLabel> */}
            {/* </Link> */}
            <Input
              type="password"
              name="password"
              onChange={setPassVal}
            ></Input>
          </InputContainer>
        </form>
        <LoginBtn onClick={() => checkUser(state.id, state.password)}>
          Login
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
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 370px;
  height: 300px;
  padding: 24px;
  border-radius: 10px;
  line-height: 40px;
  margin-top: 20px;
`;
// text, input 묶음
const InputContainer = styled.div`
  width: 350px;
  height: 100px;
  margin-bottom: 15px;
`;
// label label
const Label = styled.label`
  width: 300px;
  font-size: 24px;
  font-weight: 700;
`;
// 비밀번호 찾기 label
// const PassLabel = styled.label`
//   font-size: 18px;
//   margin-left: 125px;
//   color: hsl(206, 100%, 40%);
//   margin-top: 50px;
//   left: 400px;
// `;
// Input태그
const Input = styled.input`
  width: 330px;
  height: 30px;
  padding: 8px 9px 8px 9px;
  border: 1px solid lightgray;
  border-radius: 5px;

  font-size: 18px;
`;

// 로그인 버튼
const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 42px;
  margin: 6px 0 15px 7px;
  padding: 8px 9px 8px 9px;
  background-color: hsl(206, 100%, 52%);
  border-radius: 5px;
  color: white;
  font-size: 22px;
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
  width: 400px;
  height: 42px;
  margin: 6px 0 6px 0;
  padding: 8px 9px 8px 9px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  color: ${(props) => (props.color === 'white' ? 'black' : 'white')};
  font-size: 22px;
  border: 2px solid lightgray;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const SingUp = styled.label`
  display: flex;
  margin-top: 45px;
  font-size: 20px;
  text-decoration: none;
  :hover {
    background-color: ${(props) => props};
  }
`;

const Image = styled.img`
  width: 50px;
  height: 70px;
  margin-bottom: 30px;
`;
