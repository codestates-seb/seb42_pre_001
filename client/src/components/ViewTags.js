import styled from 'styled-components';
const ViewTags = () => {
  const tagArr = ['javascript', 'reactjs'];
  return (
    <Container>
      {tagArr.map((el, idx) => (
        <Tag key={idx}>{el}</Tag>
      ))}
    </Container>
  );
};
export default ViewTags;
const Container = styled.span`
  margin-top: 20px;
  list-style-type: none;
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
