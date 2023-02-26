import styled from 'styled-components';
import ViewTags from '../ViewTags';

const CompanyItem = ({ company }) => {
  return (
    <Container>
      <ImageWrapper src={company.img}></ImageWrapper>
      <ContentContainer>
        <Name>{company.name}</Name>
        <Content>{company.content}</Content>
        <ViewTags tags={company.tags} />
      </ContentContainer>
    </Container>
  );
};
export default CompanyItem;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px;
  border-bottom: 1px solid hsl(210deg 8% 85%);
`;
const ImageWrapper = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 5px;
  margin-right: 24px;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.div`
  font-size: 15px;
  color: hsl(206deg 100% 40%);
  margin-bottom: 8px;
  cursor: pointer;
  :hover {
    color: hsl(206deg 100% 52%);
  }
`;
const Content = styled.div`
  font-size: 13px;
  color: hsl(210deg 8% 25%);
`;
