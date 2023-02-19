import styled from 'styled-components';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import ViewTags from '../ViewTags';
import ViewProfile from '../ViewProfile';
const QuestionContent = () => {
  let str = `I tried every solution I found online, but nothing worked. I tried to add this : android:orientation="vertical" to the linearLayout, but it changed nothing. I still can't scroll How can I get the scrollView to work?`;
  return (
    <Container>
      <VoteContainer>
        <VoteUpButton size="45px"></VoteUpButton>
        <VoteNum>0</VoteNum>
        <VoteDownButton size="45px"></VoteDownButton>
      </VoteContainer>
      <ContentContainer>
        <Content>{str}</Content>
        <ViewTags />
        <ViewProfile />
      </ContentContainer>
    </Container>
  );
};
export default QuestionContent;

const Container = styled.div`
  width: 727px;
  padding-top: 24px;
  display: flex;
`;
const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;
const VoteUpButton = styled(GoTriangleUp)`
  color: hsl(210deg 8% 75%);
  cursor: pointer;
`;
const VoteNum = styled.div`
  align-self: center;
  font-size: 21px;
  color: hsl(210deg 8% 45%);
`;
const VoteDownButton = styled(GoTriangleDown)`
  color: hsl(210deg 8% 75%);
  cursor: pointer;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  height: 700px;
  word-break: break-all; // width에 맞게 강제 줄바꿈
`;
