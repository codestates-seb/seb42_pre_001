import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const PaginationController = ({ name, num = 1 }) => {
  const navigate = useNavigate();
  return name === 'Prev' ? (
    <PaginationWrapper
      onClick={() => navigate(`/questions/page/${Number(num) - 1}`)}
    >
      {name}
    </PaginationWrapper>
  ) : (
    <PaginationWrapper
      onClick={() => navigate(`/questions/page/${Number(num) + 1}`)}
    >
      {name}
    </PaginationWrapper>
  );
};
export default PaginationController;
const PaginationWrapper = styled.div`
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 5px;
  color: hsl(210deg 8% 15%);
  border: 1px solid hsl(210deg 8% 75%);
  font-size: 13px;
  cursor: pointer;
  :hover {
    background-color: hsl(210deg 8% 90%);
  }
`;
