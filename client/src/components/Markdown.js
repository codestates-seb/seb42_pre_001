import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import styled from 'styled-components';
const Markdown = ({ content }) => {
  return (
    <Rmarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return inline ? (
            // 강조 (``)
            <code
              style={{
                background:
                  'linear-gradient( to right, var(--sub-highlight-color) 15%, var(--highlight-color) 85%, var(--sub-highlight-color) )',
                padding: '2px',
                borderRadius: '3px',
              }}
              {...props}
            >
              {children}
            </code>
          ) : match ? (
            // 코드 (```)
            <SyntaxHighlighter
              style={prism}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children)
                .replace(/\n$/, '')
                .replace(/\n&nbsp;\n/g, '')
                .replace(/\n&nbsp\n/g, '')}
            </SyntaxHighlighter>
          ) : (
            <SyntaxHighlighter
              style={prism}
              language="textile"
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          );
        },
        // 인용문 (>)
        blockquote({ children, ...props }) {
          return (
            <div
              style={{
                background: '#f0f0f0',
                padding: '1px 15px',
                borderRadius: '10px',
              }}
              {...props}
            >
              {children}
            </div>
          );
        },
        img({ ...props }) {
          return (
            <img
              style={{ maxWidth: '100%' }}
              src={props.src.replace('../../../../public/', '/')}
              alt="MarkdownRenderer__Image"
            />
          );
        },
        em({ children, ...props }) {
          return (
            <span style={{ fontStyle: 'italic' }} {...props}>
              {children}
            </span>
          );
        },
      }}
    >
      {content}
    </Rmarkdown>
  );
};
export default Markdown;

const Rmarkdown = styled(ReactMarkdown)`
  white-space: normal;
  word-wrap: break-word;
  padding-bottom: 10px;
  > p {
    margin-bottom: 16.5px;
  }
  ul {
    list-style: none;
  }
`;
