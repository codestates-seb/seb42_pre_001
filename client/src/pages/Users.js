import styled from 'styled-components';
import LeftSidebar from '../components/inquiry/LeftSidebar';

const Users = () => {
  return (
    <UsersContainer>
      <LeftSidebar />
      <UsersContentContainer>
        <h1>Users</h1>
      </UsersContentContainer>
    </UsersContainer>
  );
};
export default Users;

const UsersContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const UsersContentContainer = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  display: flex;
  flex-direction: row;
`;
