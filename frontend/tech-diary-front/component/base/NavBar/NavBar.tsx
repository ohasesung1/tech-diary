/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import NavItem from './NavItem';
import { mediaQuery } from 'component/layout/responsive';
import Modal from 'component/common/Modal';
import SignInModal from 'component/common/SignInModal';
// import { getStorage } from 'libs/storage';
import { useEffect } from 'react';

const NavWrap = styled.nav`
  label: nav;
  position: absolute;
`;

const Content = styled.div`
  label: nav_content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileWrap = styled.div`
  label: profile_wrap;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem 0;

  ${mediaQuery.sm} {
    padding: 1rem;
  }
`;

const ProfileImageWrap = styled.div`
  label: profile_image_wrap;
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`;

const ProfileImage = styled.img`
  label: profile_image;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`;

const Intro = styled.pre`
  label: intro;
  text-align: center;
  padding: 0 1rem;
  color: white;
  font-size: 1rem;
  line-height: 2rem;
`;

const ResumeWrap = styled.div`
  label: resume_wrap;
  display: flex;
  height: 3rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NavList = styled.ul`
  label: nav_list;
  width: 100%;
  padding-top: 3rem;

  ${mediaQuery.sm} {
    display: flex;
    flex-direction: row;
    height: 4rem;
    padding-top: 0;
    margin-bottom: 1rem;
  }

  & > * {
    margin-top: 0.5rem;
  }
`;

const SignInButton = styled.div<{token: string}>`
  label: log_in_button;
  margin: 13rem 0;
  color: #adb5bd;
  transition: 0.3s ease-in-out;

  &:hover {
    transition: 0.3s ease-in-out;
    cursor: pointer;
    color: #DDFFAA;
  }

  ${mediaQuery.sm} {
    display: none
  }

  ${(props) => props.token && `
    
  `}
`;

function NavBar() {
  // const token = getStorage('diary-token');

  useEffect(() => {


    
  }, []);

  return (
    <NavWrap>
      <Content>
        <ProfileWrap>
          <ProfileImageWrap>
            {/* <ProfileImage src="/files/profileImage.png" alt="profile_image_png"/> */}
          </ProfileImageWrap>
          <Intro>
            {`안녕하세요, 탐험하고 모험하는 개발자 \n 오해성입니다!`}
          </Intro>
          <ResumeWrap>
            <a href="https://www.notion.so/O-HAESEONG-7d34eb6436d0486fbcaffd8b5c0d8df5" style={{ color: "#DDFFAA" }}>https://notion.link.com</a>
          </ResumeWrap>
        </ProfileWrap>
        <NavList>
          <NavItem href="/">Project</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="https://github.com/ohasesung1">Github</NavItem>
          <NavItem href="/activity">Activity</NavItem>
          <NavItem href="/certificate">Certificate</NavItem>
        </NavList>
        <Modal content={<SignInModal/>}>
          {/* <SignInButton token={token}>Sign In</SignInButton> */}
        </Modal>
      </Content>
    </NavWrap>
  );
}

export default NavBar;