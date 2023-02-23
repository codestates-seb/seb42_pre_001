import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Pagination = ({ pageNum }) => {
  const navigate = useNavigate();
  return (
    <PaginationWrapper onClick={() => navigate(`/questions/page/${pageNum}`)}>
      {pageNum}
    </PaginationWrapper>
  );
};
export default Pagination;

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
// const FocusPaginationWrapper = styled.div`
//   height: 27px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-basis: 25px;
//   padding: 0 8px;
//   margin-right: 5px;
//   border-radius: 5px;
//   color: hsl(210deg 8% 15%);
//   border: 1px solid hsl(210deg 8% 75%);
//   font-size: 13px;
//   background-color: hsl(27deg 90% 55%);
//`;
