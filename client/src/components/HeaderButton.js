import styled, { css } from 'styled-components';

function HeaderButton({ buttonText }) {
  return <Button text={buttonText}>{buttonText}</Button>;
}

const Button = styled.button`
  padding: 8px 10.4px;
  border: 1px solid hsl(205, 41%, 63%);
  border-radius: 3px;
  margin: 4px;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.7);

  ${(props) => {
    return (
      props.text === 'Log in' &&
      css`
        color: hsl(205, 47%, 42%);
        background-color: hsl(205, 46%, 92%);
        :hover {
          color: hsl(205, 46%, 32%);
          background-color: hsl(205, 57%, 81%);
        }
      `
    );
  }}
  ${(props) => {
    return (
      props.text === 'Sign up' &&
      css`
        color: hsl(0, 0%, 100%);
        background-color: hsl(206, 100%, 52%);
        :hover {
          background-color: hsl(206, 111%, 41%);
        }
      `
    );
  }}
`;
export default HeaderButton;
