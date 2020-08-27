import React, { ReactNode, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { MdClear } from 'react-icons/md';
import { bounce } from 'styles/animation';
import { RootState } from 'store/modules';
import { useSelector } from 'react-redux';

const ModalBackground = styled.div<{ isOpen: boolean }>`
  label: modal_background;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  display: ${(props) => props.isOpen ? `flex` : `none`};
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  label: container;
  position: relative;
  width: 33rem;
  height: 23rem;
  background-color: white;
  border-radius: 5px;

  animation: 1s ${bounce} ease-in-out forwards;
`;

const ModalHeader = styled.div`
  label: close_button_wrap;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
  height: 3rem;
`;

type Props = {
  content?: ReactNode;
  children: ReactNode;
}

function Modal({ content, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const { authLoginErrorMsg } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (authLoginErrorMsg === 'success') {
      setIsOpen(false);
    }
  }, [authLoginErrorMsg]);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>
      <ModalBackground isOpen={isOpen}>
        <Container>
          <ModalHeader>
            <MdClear onClick={() => setIsOpen(false)} style={{ width: '2rem', height: '2rem', cursor: "pointer" }}/>
          </ModalHeader>
          {content}
        </Container>
      </ModalBackground>
    </>
  );
}

export default Modal;