import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { CgSearch } from 'react-icons/cg';
import MainButton from './MainButton';

import { useState } from 'react';
// import { HiOutlineXMark } from 'react-icons/hi2';
import { GoInbox } from 'react-icons/go';
import { GiDiamondTrophy } from 'react-icons/gi';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { BsFillChatRightTextFill } from 'react-icons/bs';

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(!isLogin);
    console.log(isLogin);
  };

  return (
    <HeaderWrapper>
      <Div>
        <Menu isLogin={isLogin}>
          {/* <HiOutlineXMark size="20" /> */}
          <FiMenu size="20" />
        </Menu>
        <LogoLink href="https://stackoverflow.com/">
          <span></span>
        </LogoLink>
        <Navi isLogin={isLogin}>
          <li>
            <a href="https://stackoverflow.co/">About</a>
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <a href="https://stackoverflow.co/teams/">For Teams</a>
          </li>
        </Navi>
        <SearchBar isLogin={isLogin}>
          <input />
          <CgSearch size="20" color="hsl(210,8%,55%)" />
        </SearchBar>
        <Topbar isLogin={isLogin}>
          {isLogin ? (
            <>
              <li>
                <Link to="/users/logout">
                  <img
                    src="https://www.gravatar.com/avatar/?s=32&d=identicon&r=PG&f=1"
                    alt=""
                  />
                </Link>
              </li>
              <li>
                <Link to="/users/logout">
                  <TopbarInbox />
                </Link>
              </li>
              <li>
                <Link to="/users/logout">
                  <TopbarAchievements />
                </Link>
              </li>
              <li>
                <Link to="/users/logout">
                  <TopbarQuestionMark />
                </Link>
              </li>
              <li>
                <Link to="/users/logout">
                  <TopbarCurrentCommunity />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/users/login" onClick={handleLogin}>
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

const LogoLink = styled(Menu)`
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
    width: 20px;
    margin: 6px 15px 0 0;
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
  }
`;

const SearchBar = styled.div`
  position: relative;
  width: ${({ isLogin }) => (isLogin ? '60%' : '52%')};
  margin: 0 8px;
  > input {
    width: 100%;
    color: hsl(210deg 8% 25%);
    box-sizing: border-box;
    border: 1px solid hsl(210deg 8% 75%);
    border-radius: 3px;
    padding: 7.8px 9.1px 7.8px 32px;
  }
  > svg {
    position: absolute;
    top: 51%;
    right: auto;
    left: 0.4em;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

const TopbarInbox = styled(GoInbox)`
  display: block;
  width: 20px;
  height: 20px;
  color: hsl(210deg 8% 35%);
`;
const TopbarAchievements = styled(GiDiamondTrophy)`
  display: block;
  width: 20px;
  height: 20px;
  color: hsl(210deg 8% 35%);
`;
const TopbarQuestionMark = styled(AiFillQuestionCircle)`
  display: block;
  width: 20px;
  height: 20px;
  color: hsl(210deg 8% 35%);
`;

const TopbarCurrentCommunity = styled(BsFillChatRightTextFill)`
  display: block;
  width: 20px;
  height: 20px;
  color: hsl(210deg 8% 35%);
`;

export default Header;
