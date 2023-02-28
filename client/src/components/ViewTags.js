import styled from 'styled-components';
const ViewTags = ({ tags = [] }) => {
  return (
    <Container>
      {tags.map((el, idx) => (
        <Tag key={idx}>{el}</Tag>
      ))}
    </Container>
  );
};
export default ViewTags;

const Container = styled.span`
  width: 380px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  list-style-type: none;
`;
const Tag = styled.span`
  margin: 0px 5px 5px 0px;
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
