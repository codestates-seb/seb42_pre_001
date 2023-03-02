import styled from 'styled-components';
import { ReactComponent as FooterLogo } from '../assets/footerLogo.svg';
import {
  footerStackOverflow,
  footerCompany,
  footerProducts,
  footerStackExchangeNetwork,
} from '../assets/footerDesc';

function Footer() {
  return (
    <>
      <AskPageFooter>
        <FooterContent>
          <FooterLogoWrapper>
            <a href="https://stackoverflow.com/">
              <FooterLogo />
            </a>
          </FooterLogoWrapper>
          <FooterMenu>
            <div>
              <a href="https://stackoverflow.com/">STACK OVERFLOW</a>
              <ul>
                {footerStackOverflow.map((menu, idx) => (
                  <li key={idx}>{menu}</li>
                ))}
              </ul>
            </div>
            <div>
              <a href="https://stackoverflow.com/">PRODUCTS</a>
              <ul>
                {footerProducts.map((menu, idx) => (
                  <li key={idx}>{menu}</li>
                ))}
              </ul>
            </div>
            <div>
              <a href="https://stackoverflow.com/">COMPANY</a>
              <ul>
                {footerCompany.map((menu, idx) => (
                  <li key={idx}>{menu}</li>
                ))}
              </ul>
            </div>
            <div>
              <a href="https://stackoverflow.com/">STACK EXCHANGE NETWORK</a>
              <ul>
                {footerStackExchangeNetwork.map((menu, idx) => (
                  <li key={idx}>{menu}</li>
                ))}
              </ul>
            </div>
          </FooterMenu>
          <Company>
            <CompanyCommunity>
              <li>Blog</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>
                <a href="https://www.instagram.com/eversuns3t/?igshid=YmMyMTA2M2Y%3D">
                  Instagram
                </a>
              </li>
            </CompanyCommunity>
            <CompanyInfo>
              <p>
                Site design / logo © 2023 Stack Exchange Inc; user contributions
                licensed under CC BY-SA.
              </p>
              <p>rev 2023.2.15.43242</p>
            </CompanyInfo>
          </Company>
        </FooterContent>
      </AskPageFooter>
    </>
  );
}
const AskPageFooter = styled.footer`
  background-color: hsl(210deg 8% 15%);
  color: hsl(210deg 8% 60%);
`;
const FooterContent = styled.div`
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 12px 12px 12px;
  display: flex;
  flex: 2 1 auto;
  flex-flow: row wrap;
`;

const FooterLogoWrapper = styled.div`
  flex: 0 0 64px;
  margin: -12px 0 32px 0;
`;

const FooterMenu = styled.div`
  display: flex;
  flex: 2 1 auto;
  flex-wrap: wrap;

  > div {
    padding: 0 12px 24px 0;
    flex: 1 0 auto;
  }

  > div a {
    display: block;
    font-weight: 900;
    font-size: 14px;
    margin-bottom: 12px;
    color: hsl(210, 8%, 75%);
    text-decoration: none;
    cursor: pointer;
  }

  > div ul {
    padding: 0;
  }

  > div ul li {
    font-size: 14px;
    list-style: none;
    color: hsl(210, 8%, 60%);
    padding: 4px 0;
    cursor: pointer;
  }
`;

const Company = styled.div`
  min-width: 278px;
  flex: 1 1 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
`;

const CompanyCommunity = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  > li {
    margin-right: 16px;
    padding: 4px 0;
    cursor: pointer;
    > a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

const CompanyInfo = styled.div`
  > p:last-child {
    margin-top: auto;
    margin-bottom: 24px;
  }
`;

export default Footer;
