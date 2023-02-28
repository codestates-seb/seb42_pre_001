import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ViewTags from '../ViewTags';
const QuestionsItem = ({ question }) => {
  const { title, memberName, questionId, view, answerCount, tags, memberId } =
    question;

  const navigate = useNavigate();
  return (
    <Container>
      <LeftContainer>
        <LeftWrapper>
          <LeftVotesNum>0</LeftVotesNum>
          <LeftVotes>votes</LeftVotes>
        </LeftWrapper>

        {answerCount > 0 ? (
          <LeftWrapper>
            <FocusLeftWrapper>
              <LeftAnswersNum>{answerCount}</LeftAnswersNum>
              {answerCount === 1 ? (
                <LeftAnswers>answer</LeftAnswers>
              ) : (
                <LeftAnswers>answers</LeftAnswers>
              )}
            </FocusLeftWrapper>
          </LeftWrapper>
        ) : (
          <LeftWrapper>
            <LeftNum>0</LeftNum>
            <Left>answers</Left>
          </LeftWrapper>
        )}

        <LeftWrapper>
          <LeftNum>{view}</LeftNum>
          <Left>views</Left>
        </LeftWrapper>
      </LeftContainer>
      <RightContainer>
        <RightTop onClick={() => navigate(`/questions/${questionId}`)}>
          {title}
        </RightTop>
        <RightBottom>
          <TagsContainer>
            <ViewTags tags={tags} />
          </TagsContainer>
          <NameContainer>
            <NameImage
              src={`https://source.boringavatars.com/beam/25/${memberId}%20${memberName}?square`}
              alt="avatar"
            />
            <Name>{memberName}</Name>
            <Num>{memberId + 5}</Num>
            <Time>asked {memberId + 1} min ago</Time>
          </NameContainer>
        </RightBottom>
      </RightContainer>
    </Container>
  );
};
export default QuestionsItem;

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
const FocusLeftWrapper = styled.div`
  padding: 2px 4px;
  display: flex;
  border: 1px solid hsl(140deg 41% 31%);
  border-radius: 3px;
`;
const LeftVotes = styled.div``;
const LeftAnswers = styled.div`
  color: hsl(140deg 41% 31%);
`;
const Left = styled.div`
  color: gray;
`;
const LeftVotesNum = styled.div`
  padding: 0em 0.2em 0em 0em;
`;
const LeftAnswersNum = styled.div`
  padding: 0em 0.2em 0em 0em;
  color: hsl(140deg 41% 31%);
`;
const LeftNum = styled.div`
  padding: 0em 0.2em 0em 0em;
  color: gray;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const RightTop = styled.div`
  width: 593px;
  word-wrap: break-word;
  cursor: pointer;
  padding-bottom: 6px;
  color: hsl(206deg 100% 40%);
  font-size: 17px;
  :hover {
    color: hsl(206deg 100% 52%);
  }
  :visited {
    text-decoration: none;
  }
`;
const RightBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;
const NameContainer = styled.div`
  display: flex;
  align-self: center;
  flex-grow: 1;
`;
const NameImage = styled.img`
  width: 16px;
  height: 16px;
  margin: 2px 4px 0px 0px;
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
const TagsContainer = styled.div`
  width: 380px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;
