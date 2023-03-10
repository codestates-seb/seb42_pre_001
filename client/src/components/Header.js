import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { CgSearch } from 'react-icons/cg';
import MainButton from './MainButton';
import { GoInbox } from 'react-icons/go';
import { GiDiamondTrophy } from 'react-icons/gi';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { BsFillChatRightTextFill } from 'react-icons/bs';
import { InputStyle } from './ask/AskStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { setIsLogin } from '../slice/loginSlice';

function Header() {
  const [cookie, setCookie] = useCookies();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.login;
  });
  const navigate = useNavigate();
  if (!cookie.id) {
    setCookie('id', 'unll@null');
  }

  const profile = `https://source.boringavatars.com/beam/25/${
    cookie.loginMemberId ? cookie.loginMemberId : ''
  }%20?square`;

  // 토큰이 있을 경우 로그인 유지
  if (cookie.accessToken && cookie.refreshToken) {
    dispatch(setIsLogin(true));
  }

  const moveMypage = () => {
    const memberId = cookie.loginMemberId;

    const id = memberId;

    navigate(`/users/${id}`);
  };

  return (
    <HeaderWrapper>
      <Div>
        <Menu isLogin={state.isLogin}>
          {/* <HiOutlineXMark size="20" /> */}
          <FiMenu size="20" />
        </Menu>
        <LogoLink to="/">
          <span></span>
        </LogoLink>
        <Navi isLogin={state.isLogin}>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <a href="/">For Teams</a>
          </li>
        </Navi>
        <SearchBar isLogin={state.isLogin}>
          <HeaderInput />
          <CgSearch size="20" color="hsl(210,8%,55%)" />
        </SearchBar>
        <Topbar isLogin={state.isLogin}>
          {state.isLogin ? (
            <>
              <li>
                <img
                  onClick={moveMypage}
                  role="presentation"
                  src={profile}
                  alt="pic"
                />
              </li>

              <li>
                <Link to="/users/logout">
                  <GoInbox />
                </Link>
              </li>
              <li>
                <Link to="/users/logout">
                  <GiDiamondTrophy />
                </Link>
              </li>
              <li>
                <Link to="/users/logout">
                  <AiFillQuestionCircle />
                </Link>
              </li>
              <li>
                <Link to="/users/logout">
                  <BsFillChatRightTextFill />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/users/login">
                  <MainButton buttonText="Log in" />
                </Link>
              </li>
              <li>
                <Link to="/users/signup">
                  <MainButton buttonText="Sign up" />
                </Link>
              </li>
            </>
          )}
        </Topbar>
      </Div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  width: 100%;
  z-index: 5050;
  background-color: hsl(210deg 8% 98%);
  min-width: 800px;
  height: 50px;
  border-top: 3px solid #f48024;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1264px;
  min-width: auto;
  height: 100%;
  padding-right: 14px;
`;

const Menu = styled.a`
  display: ${({ isLogin }) => (isLogin ? 'none' : 'flex')};
  align-items: center;
  height: 100%;
  padding: 0 16px;
  background-color: transparent;
  :hover {
    color: hsl(210deg 8% 35%);
    background-color: hsl(210, 8%, 90%);
  }
`;

const LogoLink = styled(Link)`
  display: ${({ isLogin }) => (isLogin ? 'none' : 'flex')};
  align-items: center;
  height: 100%;
  background-color: transparent;
  :hover {
    color: hsl(210deg 8% 35%);
    background-color: hsl(210, 8%, 90%);
  }

  padding: 0 8px;
  > span {
    background-image: url('https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27');
    width: 150px;
    height: 30px;
    background-position: 0 -500px;
  }
`;

const Navi = styled.ol`
  display: flex;
  > li {
    height: 100%;
    list-style: none;
    padding: 0;
  }

  > li:not(:nth-child(2)) {
    display: ${({ isLogin }) => (isLogin ? 'none' : 'block')};
  }
  a {
    display: flex;
    align-items: center;
    position: relative;
    user-select: auto;
    margin: 5px 0 0;
    padding: 6px 12px;
    font-size: small;
    color: hsl(210deg 8% 35%);
    white-space: nowrap;
    border: none;
    border-radius: 1000px;
    cursor: pointer;
    :hover {
      color: hsl(210deg 8% 35%);
      background-color: hsl(210, 8%, 90%);
    }
  }
`;

const Topbar = styled.ol`
  display: flex;

  height: 100%;
  img {
    width: 24px;
    height: 24px;
    border-radius: 3px;
  }
  > li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    list-style: none;
    cursor: pointer;
    ${({ isLogin }) => {
      return (
        isLogin &&
        css`
          padding: 0 10px;
          :hover {
            color: hsl(210deg 8% 35%);
            background-color: hsl(210, 8%, 90%);
          }
        `
      );
    }}
    > a > svg {
      display: block;
      width: 20px;
      height: 20px;
      color: hsl(210deg 8% 35%);
    }
  }
`;

const SearchBar = styled.div`
  position: relative;
  width: ${({ isLogin }) => (isLogin ? '60%' : '52%')};
  margin: 0 8px;
  > svg {
    position: absolute;
    top: 51%;
    right: auto;
    left: 0.4em;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

const HeaderInput = styled(InputStyle)`
  padding: 7.8px 9.1px 7.8px 32px;
`;

export default Header;
