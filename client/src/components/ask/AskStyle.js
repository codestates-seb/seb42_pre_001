import styled from 'styled-components';

const AskBoxStyle = styled.div`
  width: 70%;
  height: min-content;
  flex-shrink: 0;
  border: 1px solid hsl(210deg 8% 90%);
  border-radius: 3px;
  background-color: white;
  padding: 24px;
  margin-right: 20px;
  label {
    display: block;
    margin-bottom: 2px;
    font-weight: bold;
  }
  p {
    font-size: small;
    margin-bottom: 2px;
    padding: 0 2px;
  }
  button {
    margin-top: 8px;
  }
  > div:last-child {
    color: hsl(358deg 62% 52%);
    font-size: small;
    padding: 2px;
    margin: 2px 0;
  }
`;

const InputStyle = styled.input`
  width: 100%;
  color: hsl(210deg 8% 25%);
  border: 1px solid hsl(210deg 8% 75%);
  border-radius: 3px;
  padding: 0.6em 0.7em;
  font-size: 13px;
  :focus {
    outline: none;
    border-color: hsl(206deg 90% 70%);
    box-shadow: 0 0 0 4px hsl(206deg 65% 91%);
  }
`;

const TagBoxStyle = styled.div`
  width: 100%;
  color: hsl(210deg 8% 25%);
  border: 1px solid hsl(210deg 8% 75%);
  border-radius: 3px;
  padding: 0.6em 0.7em;
  font-size: 13px;
  :focus {
    outline: none;
    border-color: hsl(206deg 90% 70%);
    box-shadow: 0 0 0 4px hsl(206deg 65% 91%);
  }
`;

const NoticeStyle = styled.div`
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  border: 1px solid hsl(210deg 8% 85%);
  border-radius: 3px;
  height: fit-content;
  background-color: white;
  position: absolute;
  left: 72%;
  width: 20%;
  min-width: 346.805px;
  > h5 {
    padding: 12px;
    font-size: 1rem;
    font-weight: 450;
    letter-spacing: 0.03rem;
    background-color: hsl(210deg 8% 98%);
    border-bottom: 1px solid hsl(210deg 8% 85%);
  }
  > div {
    display: flex;
    margin: 16px;
    > div:first-child {
      margin: 0 8px;
    }
  }
  p {
    font-size: small;
    :not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

const HashTags = styled.span`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  > span {
    display: flex;
    align-items: center;
    white-space: nowrap;
    color: hsl(205deg 47% 42%);
    margin: 2px;
    padding: 0 4px;
    font-size: 12px;
    cursor: text;
    background-color: hsl(205deg 46% 92%);
    height: 24.5px;
    border-radius: 3px;
    :hover {
      background-color: hsl(205deg 53% 88%);
    }
  }
  button {
    display: flex;
    margin: 0 0 0 4px;
    border: none;
    background-color: transparent;
    border-radius: 3px;
    cursor: pointer;
    :hover {
      background-color: hsl(205deg 47% 42%);
      path {
        fill: hsl(205deg 46% 92%);
      }
    }
  }
  svg {
    pointer-events: none;
    width: 14px;
    height: 14px;
    overflow-clip-margin: content-box;
    overflow: hidden;
  }
  path {
    fill: hsl(205deg 47% 42%);
  }
`;
export { AskBoxStyle, InputStyle, TagBoxStyle, NoticeStyle, HashTags };
