import styled from 'styled-components';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import { FaCircle } from 'react-icons/fa';
import profile from '../../assets/profile.png';
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
        <UserContiner>
          <UserWrapper>
            <Time>asked Jan 23, 2023 at 18:35</Time>

            <UserWrapperBottom>
              <Image src={profile} />
              <NameContainer>
                <Name>myungju Kang</Name>
                <NameWrapperBottom>
                  <FirstNum>206</FirstNum>
                  <Circle />
                  <LastNum>4</LastNum>
                </NameWrapperBottom>
              </NameContainer>
            </UserWrapperBottom>
          </UserWrapper>
        </UserContiner>
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
  height: 700px;
  word-break: break-all; // width에 맞게 강제 줄바꿈
`;
const UserContiner = styled.div`
  display: flex;
  justify-content: right;
`;
const UserWrapper = styled.div`
  width: 200px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-self: right;
  background-color: hsl(205deg 46% 92%);
  border-radius: 3px;
`;
const UserWrapperBottom = styled.div`
  display: flex;
`;
const NameContainer = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
`;
const NameWrapperBottom = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 32px;
  height: 32px;
`;
const Name = styled.div`
  color: hsl(206deg 100% 40%);
  font-size: 13px;
  cursor: pointer;
  :hover {
    color: hsl(206deg 100% 52%);
  }
`;
const Time = styled.div`
  margin: 2px 0px 4px 0px;
  font-size: 12px;
  color: hsl(210deg 8% 45%);
`;
const FirstNum = styled.div`
  margin-right: 2px;
  font-size: 12px;
  color: hsl(210deg 8% 45%);
  font-weight: 600;
`;
const LastNum = styled.div`
  font-size: 12px;
  color: hsl(210deg 8% 55%);
`;
const Circle = styled(FaCircle)`
  width: 6px;
  margin: 0px 2px;
  align-self: center;
  color: hsl(27deg 90% 50%);
`;
