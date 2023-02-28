import styled from 'styled-components';
import LeftSidebar from '../components/inquiry/LeftSidebar';
import { CgSearch } from 'react-icons/cg';
import CompanyItem from '../components/others/CompanyItem';

const Companies = () => {
  window.scrollTo(0, 0);
  let companies = [
    {
      id: 1,
      img: 'https://i.stack.imgur.com/RQAf0.jpg?s=128',
      name: 'ZEISS Group',
      location: 'Bengaluru; Tonsley; Dublin',
      tech: 'Machine Learning, Medical Devices, Virtual Reality',
      content:
        'ZEISS is technology. ZEISS is optics and innovation. We develop, manufacture and sell highly innovative products and solutions for our customers in a variety of business fields. Our over 35,000 employees in 50...',
      tags: ['angular', 'swift', 'c#'],
    },
    {
      id: 2,
      img: 'https://i.stack.imgur.com/qIdTm.png?s=128',
      name: 'Novo Nordisk A/S',
      location: ' Bengaluru; Denmark; Plainsboro Township',
      tech: 'Manufacturing, Pharmaceuticals',
      content:
        'At Novo Nordisk, our focus is on defeating diabetes and other serious chronic diseases that affect the lives of hundreds of millions of people.By combining our innovation and commercial excellence, we draw...',
      tags: ['javascript', 'html', 'css'],
    },
    {
      id: 3,
      img: 'https://i.stack.imgur.com/BDWx4.jpg?s=128',
      name: 'Intuit',
      location: ' Bengaluru; Sydney; Petah Tikva',
      tech: ' Computer Software, Financial Technology',
      content:
        'Intuit is the global financial technology platform that powers prosperity for the people and communities we serve with TurboTax, Credit Karma, QuickBooks, and Mailchimp. Our teams are fueling innovation through a common architecture shared by all of the company’s applications to deliver awesome customer experiences. At the foundation of our platform architecture is a 100%...',
      tags: ['java', 'kotlin', 'scala'],
    },
    {
      id: 4,
      img: 'https://i.stack.imgur.com/qNLKv.png',
      name: 'National Security Agency',
      location: 'Honolulu; Denver; San Antonio',
      tech: 'Cybersecurity, Federal Agencies, Signals Analysis',
      content:
        'NSA is on a Mission to Hire 3,000 People! The National Security Agency (NSA) has kicked off a massive talent search with a goal of hiring 3,000 new employees in 2023. Our work in signals intelligence (SIGINT) and cybersecurity is essential to protecting our families, friends, communities, service members, and ultimately, the nation. The...',
      tags: ['java', 'c', 'c++'],
    },
    {
      id: 5,
      img: 'https://i.stack.imgur.com/bikFc.jpg?s=128',
      name: 'CBRE',
      location: 'Dallas; Richardson; New York',
      tech: ' Commercial Real Estate, Information Technology, Software Development',
      content:
        'Help lead the technological transformation of commercial real estate while enjoying the stability of a career at a large company with endless opportunities to grow. Our software engineers, product managers, UX/UI designers, software developers, cybersecurity professionals, digital strategists and project managers are building the future of work from offices around the world...',
      tags: ['html', 'css', 'javascript'],
    },
    {
      id: 6,
      img: 'https://i.stack.imgur.com/1xh74.png?s=128',
      name: 'adjoe',
      location: 'Hamburg',
      tech: ' Ad Tech, Advertising Technology, Mobile Application',
      content:
        'Every great app out there deserves to be connected with the right users and the right revenue streams. And adjoe will give this to them. We’re a leading mobile ad platform developing cutting-edge advertising and monetization solutions that takes app partners’ business to the next level. Our unique ad technologies hav...',
      tags: ['ios', 'android', 'mobile'],
    },
    {
      id: 7,
      img: 'https://i.stack.imgur.com/jbEsE.png?s=128',
      name: 'Baker Hughes',
      location: ' Bengaluru; Pune; Mumbai',
      tech: ' Software Development / Engineering',
      content:
        'Our employees work on things that matter - reducing the carbon intensity of our operations, applying proven low-carbon technology to help our customers meet their environmental goals, and innovating for the future of energy. Baker Hughes is on a journey to utilize software and digital technology for better outcomes, both for ourselves and for our customers. For ourselves, we ar...',
      tags: ['.net', 'corestandard', 'scrum'],
    },
    {
      id: 8,
      img: 'https://i.stack.imgur.com/zVh1Q.jpg?s=128',
      name: 'Deloitte US',
      location: ' Honolulu; San Francisco; Pleasanton',
      tech: ' Consulting, Software Development / Engineering',
      content:
        'Industry-leading. Difference-making. Tomorrow-shaping. These are just few of the adjectives used to describe the technologies and companies we work with every day. Join Deloitte, and those adjectives could also be describing your career. Where you can make an impact Make the most of disruptive technologies. Find the value in emerging business models. Turn technology from so...',
      tags: ['.net', 'azure', 'boomi'],
    },
    {
      id: 9,
      img: 'https://i.stack.imgur.com/Bc5xH.png?s=128',
      name: 'Sanofi',
      location: 'Toronto',
      tech: 'Pharmaceuticals',
      content:
        'The Digital Team at Sanofi is a unique data-driven team. We pride ourselves on being data obsessed and highly focused on using state of the art processes along with global technologies to drive impact to our solutions. We measure our insights and products based on how they perform across the globe and hold ourselves to the highest regard as our solutions can impact millions of lives...',
      tags: ['artficial', 'intelligence', 'ai'],
    },
    {
      id: 10,
      img: 'https://i.stack.imgur.com/5tX4m.jpg?s=128',
      name: 'Ford Motor Company',
      location: 'Palo Alto; Dearborn; Detroit',
      tech: 'Automotive, Software Development / Engineering, Transportation',
      content:
        'Pramita Mitra leads Ford’s blockchain initiatives and serves a key role for an industry group that sets standards for automakers to accelerate the launch of this potentially game-changing technology.​“What I love about working at Ford is that you don’t have to change companies to have new experiences. I’m in my fourth role in Research rig...',
      tags: ['python', 'user-experience', 'java'],
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
