import styled from 'styled-components';
import LeftSidebar from '../components/inquiry/LeftSidebar';
import { CgSearch } from 'react-icons/cg';
import TagItem from '../components/others/TagItem';
const Tags = () => {
  const tags = [
    {
      name: 'Javascript',
      content:
        'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind',
    },
    {
      name: 'python',
      content:
        'Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and',
    },
    {
      name: 'java',
      content: `Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. Th`,
    },
    {
      name: 'c#',
      content:
        'C# (pronounced "see sharp") is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets',
    },
    {
      name: 'php',
      content:
        'PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language designed initially f',
    },
    {
      name: 'android',
      content: `Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles`,
    },
    {
      name: 'html',
      content:
        'HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. Questions regarding HTML should include a',
    },
    {
      name: 'jquery',
      content:
        'jQuery is a JavaScript library. Consider also adding the JavaScript tag. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event',
    },
    {
      name: 'c++',
      content:
        'C++ is a general-purpose programming language. Initially, it was designed as an extension to C and has a similar syntax, but it is now a completely',
    },
    {
      name: 'css',
      content:
        'CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup',
    },
    {
      name: 'ios',
      content:
        'iOS is the mobile operating system running on the Apple iPhone, iPod touch, and iPad. Use this tag [ios] for questions related to programming on',
    },
    {
      name: 'mysql',
      content:
        'MySQL is a free, open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). DO NOT USE',
    },
    {
      name: 'sql',
      content:
        'Structured Query Language (SQL) is a language for querying databases. Questions should include code examples, table structure, sample data,',
    },
    {
      name: 'r',
      content:
        'R is a free, open-source programming language & software environment for statistical computing, bioinformatics, visualization & general computing.',
    },
    {
      name: 'node.js',
      content: `Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. It is used for`,
    },
    {
      name: 'reactjs',
      content:
        'React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be efficient and',
    },
    {
      name: 'arrays',
      content: `An array is an ordered linear data structure consisting of a collection of elements (values, variables, or references), each identified by one or`,
    },
    {
      name: 'c',
      content: `C is a general-purpose programming language used for system programming (OS and embedded), libraries, games and cross-platform.`,
    },
    {
      name: 'asp.net',
      content:
        'ASP.NET is a Microsoft web application development framework that allows programmers to build dynamic web sites, web applications and web',
    },
    {
      name: 'json',
      content: `JSON (JavaScript Object Notation) is a serializable data interchange format that is a machine and human readable. Do not use this tag for native`,
    },
  ];
  return (
    <TagsContainer>
      <LeftSidebar pageName="tages" />
      <TagsContentContainer>
        <Title>Tags</Title>
        <Content>
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using <br /> the right tags makes it easier for
          others to find and answer your question.
        </Content>
        <Show>Show all tag synonyms</Show>
        <SearchBar>
          <InputStyle placeholder="Filter by tag name" />
          <CgSearch size="20" color="hsl(210,8%,55%)" />
        </SearchBar>
        <TagItemContainer>
          {tags.map((el, idx) => (
            <TagItem key={idx} tags={el} />
          ))}
        </TagItemContainer>
      </TagsContentContainer>
    </TagsContainer>
  );
};
export default Tags;

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TagsContentContainer = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  display: flex;
  flex-direction: column;
  padding: 24px;
`;
const Title = styled.div`
  font-size: 27px;
  margin-bottom: 16px;
  color: hsl(210deg 8% 25%);
`;
const Content = styled.div`
  font-size: 15px;
  margin-bottom: 16px;
  color: hsl(210deg 8% 15%);
`;
const Show = styled.div`
  font-size: 13px;
  color: hsl(206deg 100% 40%);
  margin-bottom: 24px;
  cursor: pointer;
  :hover {
    color: hsl(206deg 100% 52%);
  }
`;
const InputStyle = styled.input`
  width: 219px;
  color: hsl(210deg 8% 25%);
  border: 1px solid hsl(210deg 8% 75%);
  border-radius: 3px;
  padding: 0.6em 0.7em;
  font-size: 13px;
  padding: 7.8px 9.1px 7.8px 32px;
  ::placeholder {
    color: hsl(210deg 8% 75%);
  }
  :focus {
    outline: none;
    border-color: hsl(206deg 90% 70%);
    box-shadow: 0 0 0 4px hsl(206deg 65% 91%);
  }
`;
const SearchBar = styled.div`
  position: relative;
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
const TagItemContainer = styled.div`
  height: 960px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;
