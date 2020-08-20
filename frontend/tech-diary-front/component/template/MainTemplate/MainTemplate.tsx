/** @jsx jsx */

import { ReactNode } from 'react';
import { jsx } from '@emotion/core';

type Props = {
  hiddenNav?: boolean;
  children: ReactNode;
};

function MainTemplate({ hiddenNav = false, children }: Props) {
  return (
    <div>
      
    </div>
  );
}

export default MainTemplate;