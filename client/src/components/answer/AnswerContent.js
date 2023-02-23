import styled from 'styled-components';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import ViewProfile from '../ViewProfile';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
const AnswerContent = ({ answer }) => {
  return (
    <Container>
      <VoteContainer>
        <VoteUpButton size="45px"></VoteUpButton>
        <VoteNum>0</VoteNum>
        <VoteDownButton size="45px"></VoteDownButton>
      </VoteContainer>
      <ContentContainer>
        <ReactMarkdownContainer remarkPlugins={[remarkGfm]}>
          {answer.content}
        </ReactMarkdownContainer>
        <ViewProfile user={answer.memberName} />
      </ContentContainer>
    </Container>
  );
};
export default AnswerContent;
const Container = styled.div`
  width: 727px;
  padding: 16px 0px;
  border-bottom: 1px solid hsl(210deg 8% 90%);
  display: flex;
`;
const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  flex-grow: 1;
  padding-left: 25px;
  width: 657px;
  word-wrap: break-word;
`;
const ReactMarkdownContainer = styled(ReactMarkdown)`
  width: 657px;
  word-wrap: break-word;
`;
