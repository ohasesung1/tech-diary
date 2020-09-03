import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

type ButtonSize = 'small'|'default'|'big';

const Btn = styled.button<{ size?: string, margin?: string }>`
  label: button;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 8rem;
  height: 3rem;
  margin: 0.5rem;

  ${props => {
    if (props.size === 'small') {
      return css`
        width: 5rem;
        height: 3rem;
      `;
    }
  }}
`;

type Props = {
  size?: ButtonSize;
  margin?: string;
  children: ReactNode;
  onClick?: () => void;
}

function Button({
  size = 'default',
  margin = '0 0 0 0',
  children,
  onClick,
}: Props) {

  return (
    <Btn
      size={size}
      margin={margin}
      onClick={onClick}
    >
      <span>{children}</span>
    </Btn>
  );
}

export default Button;