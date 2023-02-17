import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { CgSearch } from 'react-icons/cg';
import MainButton from './MainButton';
// import { HiOutlineXMark } from 'react-icons/hi2';
function Header() {
  return (
    <HeaderWrapper>
      <Div>
        <Menu>
          {/* <HiOutlineXMark size="20" /> */}
          <FiMenu size="20" />
        </Menu>
        <LogoLink href="https://stackoverflow.com/">
          <span></span>
        </LogoLink>
        <Navi>
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
        <SearchBar>
          <input />
          <CgSearch size="20" color="hsl(210,8%,55%)" />
        </SearchBar>
        <Topbar>
          <li></li>
          <li></li>
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
  display: flex;
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

const Topbar = styled.ol`
  padding: 0;
  display: flex;
  > li {
    list-style: none;
  }
`;

const Navi = styled(Topbar)`
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

const SearchBar = styled.div`
  position: relative;
  width: 52%;
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

export default Header;
