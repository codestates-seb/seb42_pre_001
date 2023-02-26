import styled from 'styled-components';
import LeftSidebar from '../components/inquiry/LeftSidebar';
import { CgSearch } from 'react-icons/cg';
import UserItem from '../components/others/UserItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Users = () => {
  const [users, setUsers] = useState([]);
  const apiUrl = `${process.env.REACT_APP_API_URL}/members?page=1`;
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(apiUrl);
      const { data } = response;
      setUsers(data.data);
    };
    getUsers();
  }, []);
  return (
    <UsersContainer>
      <LeftSidebar pageName="users" />
      <UsersContentContainer>
        <Title>Users</Title>
        <SearchBar>
          <InputStyle placeholder="Filter by tag name" />
          <CgSearch size="20" color="hsl(210,8%,55%)" />
        </SearchBar>
        <UserContainer>
          {users.map((el, idx) => (
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
  color: hsl(210deg 8% 25%);
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
