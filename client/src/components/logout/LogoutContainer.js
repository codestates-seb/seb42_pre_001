import { useNavigate } from 'react-router-dom';
import { setIsLogin, setUserInfo } from '../../slice/loginSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import askubuntu from '../../assets/askubuntu.png';
import exchange from '../../assets/exchange.png';
import mathoverflow from '../../assets/mathoverflow.png';
import serverfault from '../../assets/serverfault.png';
import stackapps from '../../assets/stackapps.png';
import stack from '../../assets/stack.png';
import superuser from '../../assets/superuser.png';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function Logout() {
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();

  const logout = () => {
    if (!cookies) setCookie('');

    if (cookies) {
      removeCookie('accessToken');
      removeCookie('refreshToken');
      removeCookie('id');
      removeCookie('loginMemberId');
      removeCookie('loginMemberName');
    }
  };

  // 로그아웃 성공 시 홈 화면으로 이동 => 현재 헤더의 state 값을 전역적으로 관리해야함(header 컴포넌트 수정 필요)
  const logoutHandler = () => {
    dispatch(setUserInfo(null));
    dispatch(setIsLogin(false));
    logout();
    navigate('/');
    window.location.reload();
  };
  // 로그아웃 취소 시 이전 화면으로 이동
  const cancelHandler = () => {
    navigate(-1);
  };

  return (
    <Conatiner>
      <Text2>
        Clicking “Log out” will log you out of the following domains on this
        device:
      </Text2>
      <LogoutContainer>
        <Domain href="https://askubuntu.com/">
          <Image src={askubuntu} />
          askubuntu.com
        </Domain>
        <Domain href="https://mathoverflow.net/">
          <Image src={mathoverflow} />
          mathoverflow.net
        </Domain>
        <Domain href="https://serverfault.com/">
          <Image src={serverfault} />
          serverfault.com
        </Domain>
        <Domain href="https://stackapps.com/">
          <Image src={stackapps} />
          stackapps.com
        </Domain>
        <Domain href="https://stackexchange.com/">
          <Image src={exchange} />
          stackexchange.com
        </Domain>
        <Domain href="https://stackoverflow.com/">
          <Image src={stack} />
          stackoverflow.com
        </Domain>
        <Domain href="https://superuser.com/">
          <Image src={superuser} /> superuser.com
        </Domain>
        <InputContainer>
          <Input type="checkbox"></Input>
          Log out on all devices
        </InputContainer>
        <BtnContainer>
          <LogoutBtn onClick={logoutHandler}>Log out</LogoutBtn>
          <CancelBtn onClick={cancelHandler}>Cancel</CancelBtn>
        </BtnContainer>
        <Text>
          If you’re on a shared computer, remember to log out of your Open ID
          provider (Facebook, Google, Stack Exchange, etc.) as well.
        </Text>
      </LogoutContainer>
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
const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-around;
  width: 300px;
  height: 500px;
  padding: 20px;
  border-radius: 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 15px 0 0 0;
  padding: 15px 0 0 0;
  width: 262px;
  height: 50px;
  font-size: 16px;
  border-top: 1px solid lightgray;
`;

const Domain = styled.a`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 300px;
  font-size: 16px;
  font-weight: 600;
  color: hsl(206, 100%, 35%);
  :hover {
    color: hsl(206, 100%, 70%);
    cursor: pointer;
  }
`;

// Input태그
const Input = styled.input`
  width: 15px;
  height: 15px;
  border: 1px solid;
  border-radius: 5px;
  background-color: yellow;
  margin-right: 10px;
`;

// 로그인 버튼
const LogoutBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  margin: 6px 5px 6px 2px;
  padding: 8px 9px 8px 9px;
  border: 1px solid;
  background-color: hsl(206, 100%, 52%);
  border-radius: 5px;
  color: white;
  font-size: 16px;

  :hover {
    background-color: hsl(206, 100%, 42%);
    cursor: pointer;
  }
`;

const CancelBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  margin: 6px 0 6px 7px;
  padding: 8px 9px 4px 9px;
  border: 1px solid;
  background-color: white;
  border-radius: 5px;
  color: hsl(206, 100%, 52%);
  font-size: 16px;
  :hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;
const Text = styled.div`
  font-size: 13px;
  color: gray;
  margin-top: 13px;
  line-height: 30px;
`;

const Text2 = styled.div`
  font-size: 24px;
  width: 550px;
  margin-bottom: 25px;
  text-align: center;
`;

const Image = styled.img`
  width: 35px;
  height: 35px;
  margin: 0 10px 0 5px;
`;
