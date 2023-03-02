import styled from 'styled-components';

const TagItem = ({ tags }) => {
  return (
    <Container>
      <TagWrapper>
        <Tag>{tags.name}</Tag>
      </TagWrapper>
      <TagContent>{tags.content + `...`}</TagContent>
    </Container>
  );
};
export default TagItem;
const Container = styled.div`
  width: 251px;
  height: 176px;
  padding: 12px;
  margin: 0px 10px 10px 0px;
  border: 1px solid hsl(210deg 8% 75%);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`;
const TagWrapper = styled.div`
  margin-bottom: 12px;
`;
const Tag = styled.span`
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
const TagContent = styled.div`
  font-size: 13px;
  color: hsl(210deg 8% 25%);
`;
