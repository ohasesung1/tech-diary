import React from 'react';
import styled from '@emotion/styled';
import { mediaQuery } from 'component/layout/responsive';

const LoadingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 80%;
  height: 150px;
  top: 50%;

  ${mediaQuery.sm} {
    width: 90%;
  }
`;

const LoadingImage = styled.img`
  width: 5rem;
  height: 5rem;
  user-select: none;
`;

function Loading() {
  return (
    <LoadingWrap>
      <LoadingImage src={'/files/loading.gif'}/>
    </LoadingWrap>
  );
}

export default Loading;