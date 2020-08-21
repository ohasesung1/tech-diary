/** @jsx jsx */

import { ReactNode } from 'react';
import { jsx } from '@emotion/core';
import * as S from './MainTemplate.styled';
import NavBar from 'component/base/NavBar/NavBar';
import PageHeade from 'component/base/PageHeade';

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
        <S.MainSemeWarp>
          <S.MainSeme>{children}</S.MainSeme>
        </S.MainSemeWarp>
      </S.Container>
    </S.Template>
  );
}

export default MainTemplate;