import styled from 'styled-components';

function Header() {
  return (
    <>
      <span>Products</span>
      <input />
      <Img alt="" src="../assets/profile.png" />
    </>
  );
}

const Img = styled.img`
  width: 50px;
`;

export default Header;
