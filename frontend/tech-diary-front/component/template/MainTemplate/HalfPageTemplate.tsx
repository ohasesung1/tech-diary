import React, { ReactNode } from 'react';
import styled from '@emotion/styled';


const HalfTemplate = styled.div<{ color?: string}>`
  label: half_template;
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 100vh;
  padding: 2.5rem;

  background-color: white;

  ${props => props.color && `
    background-color: ${props.color};
  `}
`;

type Props = {
  children: ReactNode;
  color?: string;
}

function HalfPageTemplate({ children, color }: Props) {
  return (
    <HalfTemplate color={color}>
      {children}
    </HalfTemplate>
  );
}

export default HalfPageTemplate;