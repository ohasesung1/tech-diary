/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import NavItem from './NavItem';
import { mediaQuery } from 'component/layout/responsive';
import Modal from 'component/common/Modal';
import SignInModal from 'component/common/SignInModal';
import { useEffect, useState, useCallback } from 'react';
import { getStorage, removeStorage } from 'libs/storage';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/modules';
import { AUTH_LOGOUT_SUCCESS } from 'store/modules/auth';

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

const ContactWrap = styled.pre`
  label: resume_wrap;
  display: flex;
  height: 3rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;

  color: #DDFFAA;
`;

const NavList = styled.div`
  label: nav_list;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 10rem;

  ${mediaQuery.sm} {
    display: flex;
    flex-direction: row;
    height: 4rem;
    margin-top: 1rem;
    padding-top: 0;
    margin-bottom: 1rem;
    padding-bottom: 0;
  }

  & > * {
    margin-top: 0.5rem;
  }
`;

const SignInButton = styled.div<{isToken?: boolean}>`
  label: log_in_button;
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
`;

function NavBar() {
  const [isToken, setIsToken] = useState(false);
  const { isLoginSuccess } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch()

  const onSignOut = useCallback(() => {
    removeStorage('diary-token');
    
    dispatch({
      type: AUTH_LOGOUT_SUCCESS,
    });
    
    setIsToken(false);
  }, [dispatch, setIsToken]);


  useEffect(() => {
    const token = getStorage('diary-token');

    if (token) {
      setIsToken(true);
    }
    
  }, [isToken, isLoginSuccess]);

  return (
    <NavWrap>
      <Content>
        <ProfileWrap>
          <ProfileImageWrap>
            <ProfileImage src="/files/profileImage.png" alt="profile_image_png"/>
          </ProfileImageWrap>
          <Intro>
            {`안녕하세요, 탐험하고 모험하는 개발자 \n 오해성입니다!`}
          </Intro>
          <ContactWrap>
            {`\n\n\n phone: 010-2889-2922 \n\n email: gotjd2720@gmail.com`}
          </ContactWrap>
        </ProfileWrap>
        <NavList>
          <NavItem href="/">Project</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="https://github.com/ohasesung1" externalLink={true}>Github</NavItem>
          <NavItem href="https://www.notion.so/O-HAESEONG-7d34eb6436d0486fbcaffd8b5c0d8df5" externalLink={true}>Notion</NavItem>
          <NavItem href="https://www.notion.so/7d27d3a8f0274630aa4d6a2d109cfd24" externalLink={true}>Activity</NavItem>
          <NavItem href="https://www.notion.so/48467a80923c48edbdd2458dc3c00117" externalLink={true}>Certificate</NavItem>
        </NavList>
        {
          !isToken ? 
          <Modal content={<SignInModal/>}>
            <SignInButton isToken={isToken}>Sign In</SignInButton>
          </Modal>
          : <SignInButton onClick={() => onSignOut()}>Sign Out</SignInButton>
        }

      </Content>
    </NavWrap>
  );
}

export default NavBar;