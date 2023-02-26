import styled from 'styled-components';
import LeftSidebar from '../components/inquiry/LeftSidebar';
import { CgSearch } from 'react-icons/cg';
import CompanyItem from '../components/others/CompanyItem';
const Companies = () => {
  let companies = [
    {
      img: `https://i.stack.imgur.com/5tX4m.jpg`,
      name: `Ford Motor Company`,
      content: `Pramita Mitra leads Ford’s blockchain initiatives and serves a key role for an industry group that sets standards for automakers to accelerate the launch of this potentially game-changing technology. "What I love about working at Ford is that you don’t have to change companies to have new experiences. I’m in my fourth`,
      tags: [`python`, `user-experience`, `java`],
    },
    {
      img: `https://i.stack.imgur.com/zGilX.jpg`,
      name: `Jumbo Supermarkets`,
      content: `At Jumbo Tech Campus, we strive to become the most customer friendly supermarket of the world! This drive is everywhere and most certainly at the Jumbo Tech Campus. Because IT is in everything Jumbo does. Each and every day we develop new innovative solutions together, so that we can assist customers even`,
      tags: [`java`, `vue.js`, `node.js`],
    },
    {
      img: `https://i.stack.imgur.com/NFWKt.png`,
      name: `HelloFresh`,
      content: `From our 2011 founding in Europe’s vibrant tech hub Berlin, we’re evolving from the world’s leading meal kit company to the world's leading food solutions group. We delivered 287 million meals and reached 8.5 million active customers around the world in Q1 2022. HelloFresh Group consists of six brands that provide`,
      tags: [`golang`, `aws`, `javascript`],
    },
    {
      img: `https://i.stack.imgur.com/RQAf0.jpg`,
      name: `ZEISS Group`,
      content: `ZEISS is technology. ZEISS is optics and innovation. We develop, manufacture and sell highly innovative products and solutions for our customers in a variety of business fields. Our over 35,000 employees in 50 locations all around the world are constantly contributing to technological progress. Today our digital solutions`,
      tags: [`angular`, `swift`, `c#`],
    },
    {
      img: `https://i.stack.imgur.com/qIdTm.png`,
      name: `Novo Nordisk A/S`,
      content: `At Novo Nordisk, our focus is on defeating diabetes and other serious chronic diseases that affect the lives of hundreds of millions of people.By combining our innovation and commercial excellence, we draw upon insights from patients and partners to transform bold ideas into life-saving and preventive medicines. Che`,
      tags: [`javascript`, `html`, `css`],
    },
  ];
  return (
    <CompaniesContainer>
      <LeftSidebar pageName="companies" />
      <CompaniesContentContainer>
        <Title>Companies</Title>
        <Learn>{`Learn about what it's like to work at companies`}</Learn>
        <SearchBarContainer>
          <SearchBar>
            <InputStyle placeholder="Search all companies" />
            <CgSearch size="20" color="hsl(210,8%,55%)" />
          </SearchBar>
          <SearchBar>
            <InputStyle placeholder="Search company by location" />
          </SearchBar>
          <SearchBtn>Search</SearchBtn>
        </SearchBarContainer>
        <CompaniesNum>{companies.length} companies</CompaniesNum>
        <CompanyItemContainer>
          {companies.map((el, idx) => (
            <CompanyItem key={idx} company={el} />
          ))}
        </CompanyItemContainer>
      </CompaniesContentContainer>
    </CompaniesContainer>
  );
};
export default Companies;

const CompaniesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CompaniesContentContainer = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  display: flex;
  flex-direction: column;
  padding: 24px 24px 100px 0px;
`;
const Title = styled.div`
  font-size: 27px;
  margin-bottom: 4px;
  color: hsl(210deg 8% 15%);
  padding-left: 24px;
`;
const Learn = styled.div`
  font-size: 13px;
  color: hsl(210deg 8% 45%);
  margin-bottom: 13px;
  padding-left: 24px;
`;
const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 24px;
`;
const CompaniesNum = styled.div`
  font-size: 15px;
  color: hsl(210deg 8% 15%);
  padding-bottom: 15px;
  border-bottom: 1px solid hsl(210deg 8% 85%);
  padding-left: 24px;
`;
const CompanyItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputStyle = styled.input`
  width: 419px;
  height: 43px;
  color: hsl(210deg 8% 25%);
  border: 1px solid hsl(210deg 8% 75%);
  border-radius: 3px;
  padding: 0.6em 0.7em;
  font-size: 13px;
  padding: 7.8px 9.1px 7.8px 32px;
  ::placeholder {
    color: hsl(210deg 8% 75%);
    font-size: 15px;
  }
  :focus {
    outline: none;
    border-color: hsl(206deg 90% 70%);
    box-shadow: 0 0 0 4px hsl(206deg 65% 91%);
  }
`;
const SearchBar = styled.div`
  position: relative;
  margin-right: 4px;
  margin-bottom: 12px;
  > svg {
    position: absolute;
    top: 51%;
    right: auto;
    left: 0.4em;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;
const SearchBtn = styled.div`
  width: 83px;
  height: 43px;
  display: block;
  font-size: 15px;
  padding: 10px 16px;
  border: 1px solid hsl(205, 41%, 63%);
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.7);
  white-space: nowrap;
  cursor: pointer;
  color: hsl(0, 0%, 100%);
  background-color: hsl(206, 100%, 52%);
  cursor: pointer;
  :hover {
    background-color: hsl(206, 111%, 41%);
  }
`;
