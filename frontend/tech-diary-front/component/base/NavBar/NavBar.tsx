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

const NavList = styled.ul`
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
          <NavItem href="/">Project</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/github">Github</NavItem>
          <NavItem href="/activity">Activity</NavItem>
          <NavItem href="/certificate">Certificate</NavItem>
        </NavList>
      </Content>
    </NavWrap>
  );
}

export default NavBar;