/** @jsx jsx */

import { ReactNode } from 'react';
import { jsx } from '@emotion/core';
import * as S from './MainTemplate.styled';
import NavBar from 'component/base/NavBar/NavBar';
import Header from 'component/base/Header';

type Props = {
  hiddenNav?: boolean;
  children: ReactNode;
};

function MainTemplate({ hiddenNav = false, children }: Props) {
  return (
    <S.Template>
      <S.Container>
        <S.AsideSemen hidden={hiddenNav}>
          <NavBar/>
        </S.AsideSemen>

        <Header/>

        <S.MainSeme>{children}</S.MainSeme>
      </S.Container>
    </S.Template>
  );
}

export default MainTemplate;