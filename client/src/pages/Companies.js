import styled from 'styled-components';
import LeftSidebar from '../components/inquiry/LeftSidebar';

const Companies = () => {
  return (
    <CompaniesContainer>
      <LeftSidebar />
      <CompaniesContentContainer>
        <h1>Companies</h1>
      </CompaniesContentContainer>
    </CompaniesContainer>
  );
};
export default Companies;

const CompaniesContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CompaniesContentContainer = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  display: flex;
  flex-direction: row;
`;
