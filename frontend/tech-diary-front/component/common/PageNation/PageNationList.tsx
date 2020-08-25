/** @jsx jsx */

import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import PageNationItem from './PageNationItem';
import { mediaQuery } from 'component/layout/responsive';


const PageNationWrap = styled.div<{ totalPage: number, page: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;

  ${(props) => `
    ${mediaQuery.sm} {
      div {
        display: none;
      }
      div:nth-of-type(1) { display: flex; align-items: center; justify-content: center;}
      div:nth-of-type(${props.page + 2}) { display: flex;   align-items: center; justify-content: center;}
      div:nth-of-type(${props.totalPage + 1}) { display: flex; align-items: center; justify-content: center; }
      div:nth-of-type(${props.totalPage + 2}) { display: flex; align-items: center; justify-content: center; }
    }
  `}
`;

type Props = {
  page: number;
  setPage: Function;
  totalPage: number;
}

function PageNationList({ page, setPage, totalPage }: Props) {
  const pageNationItems = [];

  for (let i = 0; i < totalPage; i++) {
    pageNationItems.push(<PageNationItem key={i} index={i} page={page} setPage={setPage}/>);
  }

  return (
    <PageNationWrap totalPage={totalPage} page={page}>
      <PageNationItem 
        index={-1} 
        page={page}
        setPage={setPage}
        totalPage={totalPage}
        type={'left'}/>
      {pageNationItems}
      <PageNationItem 
        index={-1}
        page={page}
        setPage={setPage}
        totalPage={totalPage}
        type={'right'}/>
    </PageNationWrap>
  );
}

export default PageNationList;
