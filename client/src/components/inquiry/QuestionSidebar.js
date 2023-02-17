import styled from 'styled-components';
import { DiStackoverflow } from 'react-icons/di';
import { BsPencilFill } from 'react-icons/bs';
import { MdOutlineChatBubbleOutline } from 'react-icons/md';
const QuestionSidebar = () => {
  return (
    <Container>
      <SidebarUl>
        <TitleLi>The Overflow Blog</TitleLi>
        <ContentLi>
          <IconWrapper>
            <BsPencilFill size="12" />
          </IconWrapper>
          <ContentDiv>
            You don’t have to build a browser in JavaScript anymore (Ep. 538)
          </ContentDiv>
        </ContentLi>
        <ContentLi>
          <IconWrapper>
            <BsPencilFill size="12" />
          </IconWrapper>
          <ContentDiv>
            Serverless scales well, but most <br />
            databases don’t
          </ContentDiv>
        </ContentLi>
        <TitleLi>Featured on Meta</TitleLi>
        <ContentLi>
          <IconWrapper>
            <CustomMdOutlineChatBubbleOutline />
          </IconWrapper>
          <ContentDiv>
            Ticket smash for [status-review] tag: Part Deux
          </ContentDiv>
        </ContentLi>
        <ContentLi>
          <IconWrapper>
            <CustomMdOutlineChatBubbleOutline />
          </IconWrapper>
          <ContentDiv>
            {`Updated cookie consent popup adds a "Necessary cookies only"
            button`}
          </ContentDiv>
        </ContentLi>
        <ContentLi>
          <IconWrapper>
            <DiStackoverflow />
          </IconWrapper>
          <ContentDiv>
            We’ve made changes to our Privacy Notice for Collectives™
          </ContentDiv>
        </ContentLi>
        <ContentLi>
          <IconWrapper>
            <DiStackoverflow />
          </IconWrapper>
          <ContentDiv>Temporary policy: ChatGPT is banned</ContentDiv>
        </ContentLi>
        <ContentLi>
          <IconWrapper>
            <DiStackoverflow />
          </IconWrapper>
          <ContentDiv>The [amazon] tag is being burninated</ContentDiv>
        </ContentLi>
        <ContentLi>
          <IconWrapper>
            <DiStackoverflow />
          </IconWrapper>
          <ContentDiv>Collectives: The next iteration</ContentDiv>
        </ContentLi>
      </SidebarUl>
    </Container>
  );
};

export default QuestionSidebar;
const CustomMdOutlineChatBubbleOutline = styled(MdOutlineChatBubbleOutline)`
  color: hsl(206deg 100% 52%);
`;
const Container = styled.div`
  padding: 24px 0 0 24px;
  flex-grow: 1;
`;

const SidebarUl = styled.ul`
  display: flex;
  flex-direction: column;
  border: 0px 1px 1px 1px solid hsl(47deg 65% 84%);
  list-style: none;
  background-color: hsl(47deg 87% 94%);
`;

const TitleLi = styled.li`
  padding: 12px 15px;
  font-size: 12px;
  font-weight: 600;
  background-color: hsl(47deg 87% 90%);
  color: hsl(210deg 8% 25%);
  border-bottom: 1px solid hsl(47deg 65% 84%);
  border-top: 1px solid hsl(47deg 65% 84%);
`;

const ContentLi = styled.li`
  display: flex;
  margin: 12px 0px;
  padding: 0px 15px;
  font-size: 12px;
  font-weight: 600;
  color: hsl(210deg 8% 25%);
`;

const ContentDiv = styled.div`
  font-size: 13px;
  font-weight: 400;
  :hover {
    color: gray;
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  padding: 0 10px 0 0;
`;
