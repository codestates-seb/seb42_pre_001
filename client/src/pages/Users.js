import styled from 'styled-components';
import LeftSidebar from '../components/inquiry/LeftSidebar';
import { CgSearch } from 'react-icons/cg';
import UserItem from '../components/others/UserItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { useCookies } from 'react-cookie';
const Users = () => {
  const [cookie] = useCookies();
  const [users, setUsers] = useState([]);
  const [usersArr, setUsersArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = `${process.env.REACT_APP_API_URL}/members?page=1`;
  const [text, setText] = useState('');
  const HandleChange = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    setUsersArr(
      users.filter((x) => x.name.toLowerCase().includes(text.toLowerCase()))
    );
  }, [text]);
  useEffect(() => {
    const getUsers = async () => {
      if (cookie.accessToken && cookie.refreshToken) {
        try {
          const response = await axios.get(apiUrl, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: cookie.accessToken,
              Refresh: cookie.refreshToken,
            },
            withCredentials: true,
          });
          const { data } = response;
          setUsers(data.data);
          setUsersArr(data.data);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          const response = await axios.get(apiUrl);
          const { data } = response;
          setUsers(data.data);
          setUsersArr(data.data);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
    };
    getUsers();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <UsersContainer>
      <LeftSidebar pageName="users" />
      <UsersContentContainer>
        <Title>Users</Title>
        <SearchBar>
          <InputStyle
            placeholder="Filter by tag name"
            value={text}
            onChange={HandleChange}
          />
          <CgSearch size="20" color="hsl(210,8%,55%)" />
        </SearchBar>
        <UserContainer>
          {usersArr.map((el, idx) => (
            <UserItem key={idx} user={el} />
          ))}
        </UserContainer>
      </UsersContentContainer>
    </UsersContainer>
  );
};
export default Users;

const UsersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const UsersContentContainer = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  display: flex;
  flex-direction: column;
  padding: 24px;
`;
const Title = styled.div`
  font-size: 27px;
  margin-bottom: 16px;
  color: hsl(210deg 8% 15%);
`;
const InputStyle = styled.input`
  width: 219px;
  color: hsl(210deg 8% 25%);
  border: 1px solid hsl(210deg 8% 75%);
  border-radius: 3px;
  padding: 0.6em 0.7em;
  font-size: 13px;
  padding: 7.8px 9.1px 7.8px 32px;
  ::placeholder {
    color: hsl(210deg 8% 75%);
  }
  :focus {
    outline: none;
    border-color: hsl(206deg 90% 70%);
    box-shadow: 0 0 0 4px hsl(206deg 65% 91%);
  }
`;
const SearchBar = styled.div`
  position: relative;
  margin-bottom: 12px;
  > svg {
    position: absolute;
    top: 51%;
    right: auto;
    left: 0.4em;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;
const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 50px;
`;
