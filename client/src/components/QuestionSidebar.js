import styled from 'styled-components';
import { DiStackoverflow } from 'react-icons/di';
import { BsPencilFill } from 'react-icons/bs';
import { MdOutlineChatBubbleOutline } from 'react-icons/md';
const QuestionSidebar = () => {
  return (
    <QuestionSidebarContainer>
      <QuestionSidebarWrapper>
        <QuestionSidebarTitle>The Overflow Blog</QuestionSidebarTitle>
        <QuestionSidebarContentWrapper>
          <IconWrapper>
            <BsPencilFill size="12" />
          </IconWrapper>
          <QuestionSidebarContent>
            You don’t have to build a browser in JavaScript anymore (Ep. 538)
          </QuestionSidebarContent>
        </QuestionSidebarContentWrapper>
        <QuestionSidebarContentWrapper>
          <IconWrapper>
            <BsPencilFill size="12" />
          </IconWrapper>
          <QuestionSidebarContent>
            Serverless scales well, but most <br />
            databases don’t
          </QuestionSidebarContent>
        </QuestionSidebarContentWrapper>
        <QuestionSidebarTitle>Featured on Meta</QuestionSidebarTitle>
        <QuestionSidebarContentWrapper>
          <IconWrapper>
            <CustomMdOutlineChatBubbleOutline />
          </IconWrapper>
          <QuestionSidebarContent>
            Ticket smash for [status-review] tag: Part Deux
          </QuestionSidebarContent>
        </QuestionSidebarContentWrapper>
        <QuestionSidebarContentWrapper>
          <IconWrapper>
            <CustomMdOutlineChatBubbleOutline />
          </IconWrapper>
          <QuestionSidebarContent>
            {`Updated cookie consent popup adds a "Necessary cookies only"
            button`}
          </QuestionSidebarContent>
        </QuestionSidebarContentWrapper>
        <QuestionSidebarContentWrapper>
          <IconWrapper>
            <DiStackoverflow />
          </IconWrapper>
          <QuestionSidebarContent>
            We’ve made changes to our Privacy Notice for Collectives™
          </QuestionSidebarContent>
        </QuestionSidebarContentWrapper>
        <QuestionSidebarContentWrapper>
          <IconWrapper>
            <DiStackoverflow />
          </IconWrapper>
          <QuestionSidebarContent>
            Temporary policy: ChatGPT is banned
          </QuestionSidebarContent>
        </QuestionSidebarContentWrapper>
        <QuestionSidebarContentWrapper>
          <IconWrapper>
            <DiStackoverflow />
          </IconWrapper>
          <QuestionSidebarContent>
            The [amazon] tag is being burninated
          </QuestionSidebarContent>
        </QuestionSidebarContentWrapper>
        <QuestionSidebarContentWrapper>
          <IconWrapper>
            <DiStackoverflow />
          </IconWrapper>
          <QuestionSidebarContent>
            Collectives: The next iteration
          </QuestionSidebarContent>
        </QuestionSidebarContentWrapper>
      </QuestionSidebarWrapper>
    </QuestionSidebarContainer>
  );
};
export default QuestionSidebar;
const CustomMdOutlineChatBubbleOutline = styled(MdOutlineChatBubbleOutline)`
  color: hsl(206deg 100% 52%);
`;
const QuestionSidebarContainer = styled.div`
  padding: 24px 0 0 24px;
  flex-grow: 1;

  .icon-wrapper {
    padding: 0 10px 0 0;
  }
`;

const QuestionSidebarWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  border: 0px 1px 1px 1px solid hsl(47deg 65% 84%);
  list-style: none;
  background-color: hsl(47deg 87% 94%);
`;

const QuestionSidebarTitle = styled.li`
  padding: 12px 15px;
  font-size: 12px;
  font-weight: 600;
  background-color: hsl(47deg 87% 90%);
  color: hsl(210deg 8% 25%);
  border-bottom: 1px solid hsl(47deg 65% 84%);
  border-top: 1px solid hsl(47deg 65% 84%);
`;

const QuestionSidebarContentWrapper = styled.li`
  display: flex;
  margin: 12px 0px;
  padding: 0px 15px;
  font-size: 12px;
  font-weight: 600;
  color: hsl(210deg 8% 25%);
`;

const QuestionSidebarContent = styled.li`
  font-size: 13px;
  font-weight: 400;
  :hover {
    color: gray;
    cursor: pointer;
  }
`;

const IconWrapper = styled.li`
  padding: 0 10px 0 0;
`;
