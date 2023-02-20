import styled from 'styled-components';

function Footer() {
  let footerStackOverflow = ['Questions', 'Help'];
  let footerProducts = ['Teams', 'Advertising', 'Collectives', 'Talent'];
  let footerCompany = [
    'About',
    'Press',
    'Work Here',
    'Legal',
    'Privacy Policy',
    'Terms of Service',
    'Contact Us',
    'Cookie Settings',
    'Cookie Policy',
  ];
  let footerStackExchangeNetwork = [
    'Technology',
    'Culture & recreation',
    'Life & arts',
    'Science',
    'Professional',
    'Business',
    'API',
    'Data',
  ];

  return (
    <>
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
        <div>
          <span>Blog</span>
          <span>Facebook</span>
          <span>Twitter</span>
          <span>LinkedIn</span>
          <span>Instagram</span>
          <p>
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            licensed under CC BY-SA.
          </p>
          <p>rev 2023.2.15.43242</p>
        </div>
      </FooterMenu>
    </>
  );
}

const FooterMenu = styled.div`
  > div a {
    font-weight: bold;
    color: hsl(210, 8%, 75%);
    text-decoration: none;
  }

  > div ul {
    padding: 0;
  }

  > div ul li {
    color: hsl(210, 8%, 60%);
    list-style: none;
  }

  :last-child {
    color: hsl(210, 8%, 60%);
  }
  display: flex;
  background-color: hsl(210, 8%, 15%);
`;

export default Footer;
