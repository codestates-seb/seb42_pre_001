import styled from 'styled-components';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import ViewProfile from '../ViewProfile';
const AnswerContent = () => {
  let str = `Certainly seems like an internal nuke issue. Which nuke are you running? I know 11 and 12 will almost always spit out some kind of python error on close - either threading or something like this.
  If your my_callbacks.py is being loaded by init/menu, try just adding the callback to the root node itself (rather than the global knob change process) with node.knob('knob_changed').setValue(YOUR CODE in string format)
  In this case of course, the knob changed code will only fire on the Root node, and you'll have to run that setValue code in each script you want. You might be able to use init/menu and another callback (onScriptLoad) to accomplish that.`;
  return (
    <Container>
      <VoteContainer>
        <VoteUpButton size="45px"></VoteUpButton>
        <VoteNum>0</VoteNum>
        <VoteDownButton size="45px"></VoteDownButton>
      </VoteContainer>
      <ContentContainer>
        <Content>{str}</Content>
        <ViewProfile />
      </ContentContainer>
    </Container>
  );
};
export default AnswerContent;
const Container = styled.div`
  width: 727px;
  padding: 16px 0px;
  display: flex;
`;
const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;
const VoteUpButton = styled(GoTriangleUp)`
  color: hsl(210deg 8% 75%);
`;
const VoteNum = styled.div`
  align-self: center;
  font-size: 21px;
  color: hsl(210deg 8% 45%);
`;
const VoteDownButton = styled(GoTriangleDown)`
  color: hsl(210deg 8% 75%);
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  height: 400px;
  word-break: break-all; // width에 맞게 강제 줄바꿈
`;
