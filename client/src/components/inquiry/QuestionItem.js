import styled from 'styled-components';

const QuestionsItems = () => {
  return (
    <Container>
      <LeftContainer>
        <LeftWrapper>
          <LeftVotesNum>0</LeftVotesNum>
          <LeftVotes>votes</LeftVotes>
        </LeftWrapper>
        <LeftWrapper>
          <LeftAnswersNum>0</LeftAnswersNum>
          <LeftAnswers>answers</LeftAnswers>
        </LeftWrapper>
        <LeftWrapper>
          <LeftViewsNum>0</LeftViewsNum>
          <LeftViews>views</LeftViews>
        </LeftWrapper>
      </LeftContainer>
      <RightContainer>
        <RightTop>Typescript specific string value in the array</RightTop>
        <RightBottom>
          <TagContainer>
            <Tages>reactjs</Tages>
            <Tages>typescript</Tages>
          </TagContainer>
          <NameContainer>
            <NameImage>
              <img
                src="https://www.gravatar.com/avatar/1038d2ef92dbab2e24166a5c46179e81?s=32&amp;d=identicon&amp;r=PG&amp;f=1"
                alt="Abdullah Imran's user avatar"
                width="16"
                height="16"
                className="s-avatar--image"
              />
            </NameImage>
            <Name>myungju kang</Name>
            <Num>1</Num>
            <Time>asked 5 min ago</Time>
          </NameContainer>
        </RightBottom>
      </RightContainer>
    </Container>
  );
};
export default QuestionsItems;

const Container = styled.div`
  display: flex;
  width: 751px;
  padding: 24px;
  border-bottom: 1px solid hsl(210deg 8% 90%);
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 16px 4px 0px;
  font-size: 13px;
  width: 110px;
`;
const LeftWrapper = styled.div`
  display: flex;
  justify-content: right;
  padding-bottom: 4px;
`;
const LeftVotes = styled.div``;
const LeftAnswers = styled.div`
  color: gray;
`;
const LeftViews = styled.div`
  color: gray;
`;
const LeftVotesNum = styled.div`
  padding: 0em 0.2em 0em 0em;
`;
const LeftAnswersNum = styled.div`
  padding: 0em 0.2em 0em 0em;
  color: gray;
`;
const LeftViewsNum = styled.div`
  padding: 0em 0.2em 0em 0em;
  color: gray;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const RightTop = styled.div`
  cursor: pointer;
  padding-bottom: 6px;
  color: hsl(206deg 100% 40%);
  font-size: 17px;
  :hover {
    color: hsl(206deg 100% 52%);
  }
`;
const RightBottom = styled.div`
  display: flex;
  flex-grow: 1;
`;
const TagContainer = styled.ul`
  display: flex;
  flex-grow: 1;
  list-style-type: none;
`;
const Tages = styled.li`
  height: 27px;
  margin-right: 5px;
  padding: 4px 6px 5px 6px;
  border-radius: 3px;
  cursor: pointer;
  background-color: hsl(205deg 46% 92%);
  color: hsl(205deg 47% 42%);
  font-size: 12px;
  :hover {
    background-color: hsl(205deg 53% 88%);
    color: hsl(209deg 100% 26%);
  }
`;
const NameContainer = styled.div`
  display: flex;
  align-self: center;
  padding-right: 30px;
`;
const NameImage = styled.div`
  padding-right: 4px;
`;
const Name = styled.div`
  color: hsl(206deg 100% 40%);
  font-size: 12px;
  padding-right: 4px;
  cursor: pointer;
  :hover {
    color: hsl(206deg 100% 52%);
  }
`;
const Num = styled.div`
  padding-right: 4px;
  color: hsl(210deg 8% 35%);
  font-size: 12px;
  font-weight: 600;
`;

const Time = styled.div`
  color: gray;
  font-size: 12px;
  cursor: pointer;
  :hover {
    color: black;
  }
`;
