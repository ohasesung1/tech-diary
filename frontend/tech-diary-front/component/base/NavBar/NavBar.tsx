/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { layoutTerm } from 'component/layout/page';
import NavItem from './NavItem';

const NavWrap = styled.nav`
  label: nav;
  position: sticky;
  top: ${layoutTerm};
`;

const Content = styled.div`
  label: nav_content;
  padding-top: 2rem;
`;

const NavList = styled.div`
  width: 20rem;

  & > * + * {
    margin-top: 0.5rem;
  }
`;

function NavBar() {
  return (
    <NavWrap>
      <Content>
        <NavList>
          <NavItem href="/">Main Page</NavItem>
          <NavItem href="/react">React</NavItem>
          <NavItem href="/react">Express</NavItem>
        </NavList>
      </Content>
    </NavWrap>
  );
}

export default NavBar;