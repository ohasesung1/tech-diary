/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { layoutTerm } from 'component/layout/page';
import NavItem from './NavItem';
import { mediaQuery } from 'component/layout/responsive';
// import profileImage from 'public/files/profileImage.png';

const NavWrap = styled.nav`
  label: nav;
  position: absolute;
  /* top: ${layoutTerm}; */
`;

const Content = styled.div`
  label: nav_content;
  display: flex;
  flex-direction: column;
`;

const ProfileWrap = styled.div`
  label: profile_wrap;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const ProfileImageWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  /* border: 1px solid white; */
`;

const Intro = styled.pre`
  text-align: center;
  padding: 0 1rem;
  color: white;
  font-size: 1rem;
  line-height: 2rem;
  /* border: 1px solid black; */
`;

const NavList = styled.ul`
  width: 100%;
  padding-top: 3rem;
  border: 1px solid black;

  ${mediaQuery.sm} {
    display: flex;
    flex-direction: row;
    position: sticky;
    z-index: 200;
    top: 0;
    padding-top: 0;
  }

  & > * + * {
    margin-top: 0.5rem;
  }
`;

function NavBar() {
  return (
    <NavWrap>
      <Content>
        <ProfileWrap>
          <ProfileImageWrap>
            <ProfileImage src="files/profileImage.png" alt="profile_image_png"/>
          </ProfileImageWrap>
          <Intro>
            {`안녕하세요, 탐험하고 모험하는 개발자 \n 오해성입니다!`}
          </Intro>
        </ProfileWrap>
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