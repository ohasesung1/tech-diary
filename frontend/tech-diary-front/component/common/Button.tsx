import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

type ButtonType = 'primary'|'primary-trans'|'secondary'|'secondary-trans';
type ButtonSize = 'small'|'default'|'big';

const Btn = styled.button<{ size?: string, margin?: string, btnType?: string }>`
  label: button-${(props) => props.btnType};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem 1rem;
  border: 0;
  outline: 0;
  margin: 1rem 0.5rem;

  &:hover {
    cursor: pointer;
  }

  ${props => {
    if (props.size === 'small') {
      return css`
        font-size: .83rem;
      `;
    }

    if (props.size === 'big') {
      return css`
        font-size: 1.5rem;
      `;
    }

    return css`font-size: 1rem;`;
  }}


  ${({ btnType }) => {
    if (btnType === 'primary') {
      return css`
        background-color: #51cf66; 
        border-radius: 5px;

        & > * {
          color: white;
        }
        
      `;
    }

    if (btnType === 'primary-trans') {
      return css`
        background-color: #868e96;
        border-radius: 5px;

        & > * {
          color: white;
        }
      `;
    }
  }}

  ${props => props.margin && `
    margin: ${props.margin};  
  `}
`;

type Props = {
  size?: ButtonSize;
  type?: ButtonType;
  margin?: string;
  children: ReactNode;
  onClick?: () => void;
}

function Button({
  size = 'default',
  type = 'primary',
  margin = '0 0 0 0',
  children,
  onClick,
}: Props) {

  return (
    <Btn
      size={size}
      margin={margin}
      btnType={type}
      onClick={onClick}
    >
      <span>{children}</span>
    </Btn>
  );
}

export default Button;