import React from 'react';
import styled from '@emotion/styled';
import PageNationItem from './PageNationItem';


const PageNationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  border: 1px solid black;

  & > * + * {
    margin: 0 1rem;
  }
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
    <PageNationWrap>
      {
        pageNationItems
      }
    </PageNationWrap>
  );
}

export default PageNationList;
