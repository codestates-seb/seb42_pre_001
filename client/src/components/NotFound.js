import styled from 'styled-components';
import { AiOutlineWarning } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <AiOutlineWarning size={200}></AiOutlineWarning>
      <ContentContainer>
        <Text size="top">Page not found</Text>
        <Text size="middle">{`We're sorry, we couldn't find the page you requested.`}</Text>
        <Btn onClick={() => navigate(`/`)}>Home으로 이동</Btn>
      </ContentContainer>
    </Container>
  );
};
export default NotFound;
const Container = styled.div`
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: center;
`;
const ContentContainer = styled.div`
  margin-left: 10px;
`;
const Text = styled.div`
  font-size: ${({ size }) => (size === 'top' ? '30px' : '15px')};
  margin-bottom: ${({ size }) => (size === 'top' ? '5px' : '15px')};
  font-weight: 500;
`;
const Btn = styled.button`
  display: block;
  padding: 8px 10.4px;
  margin: 2px;
  border: 1px solid hsl(205, 41%, 63%);
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.7);
  white-space: nowrap;
  font-weight: 500;
  cursor: pointer;
  color: hsl(0, 0%, 100%);
  background-color: hsl(206, 100%, 52%);
  cursor: pointer;
  :hover {
    background-color: hsl(206, 111%, 41%);
  }
`;
