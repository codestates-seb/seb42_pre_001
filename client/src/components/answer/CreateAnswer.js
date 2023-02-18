import styled from 'styled-components';
import MainButton from '../MainButton';

const CreateAnswer = () => {
  return (
    <Container>
      <YourAnswer>Your Answer</YourAnswer>
      {/*<TextEditor />*/}
      <ButtonContainer>
        <MainButton buttonText="Post Your Answer" />
      </ButtonContainer>
    </Container>
  );
};
export default CreateAnswer;
const Container = styled.div``;
const YourAnswer = styled.div`
  padding: 20px 0px;
  font-size: 19px;
  border-top: 1px solid hsl(210deg 8% 90%);
`;
const ButtonContainer = styled.div`
  display: flex;
  padding: 10px 0px 15px 0px;
`;
