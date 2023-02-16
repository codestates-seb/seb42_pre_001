import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaGlobeAmericas } from 'react-icons/fa';
const LeftSidebar = () => {
  return (
    <LeftSidebarContainer>
      <LeftSidebarWrapper>
        <CustomLink to="/">Home</CustomLink>
        <div className="public">PUBLIC</div>
        <CustomLink to="/inquiry">
          <div className="globe-icon-container">
            <div className="globe-icon">
              <FaGlobeAmericas size="18" />
            </div>
            Questions
          </div>
        </CustomLink>
        <CustomLink to="/tags">Tages</CustomLink>
        <CustomLink to="/users">Users</CustomLink>
        <CustomLink to="/companies">Companies</CustomLink>
      </LeftSidebarWrapper>
    </LeftSidebarContainer>
  );
};

export default LeftSidebar;

const LeftSidebarContainer = styled.div`
  border-right: 1px solid hsl(210deg 8% 90%);
`;

const LeftSidebarWrapper = styled.div`
  padding: 24px 0 0 0;
  width: 164px;
  display: flex;
  flex-direction: column;
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  .globe-icon-container {
    display: flex;
  }

  .globe-icon {
    padding: 0 5px 0 0;
  }

  .public {
    font-size: 11px;
    color: gray;
    padding: 1.5em 0.5em 0.5em 0.5em;
  }
`;
const CustomLink = styled(Link)`
  color: gray;
  text-decoration: none;
  font-size: 13px;
  padding: 0.5em;
  :hover {
    color: black;
  }
  &:nth-child(n + 4) {
    padding: 0.5em 0.5em 0.5em 2.5em;
  }
  &:first-child {
    background-color: hsl(210deg 8% 95%);
    color: black;
    font-weight: 600;
    border-right: 3px solid hsl(27deg 90% 55%);
  }
`;
