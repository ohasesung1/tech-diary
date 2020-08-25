import React, { useCallback } from 'react';
import styled from '@emotion/styled';

const PageNationItemWrap = styled.div<{ isSelect: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: 0.2rem solid #20c997;
  background-color: #20c997;
  color: white;
  transition: 0.3s ease-in-out;

  &:hover {
    transition: 0.3s ease-in-out;
    cursor: pointer;
    background-color: white;
    color: black;
  }

  ${(props) => props.isSelect && `
    background-color: white;
    color: black;
  `}
`;

type Props = {
  index: number;
  page: number;
  setPage: Function;
}

function PageNationItem({ index, page, setPage }: Props) {

  const onClickPage = useCallback(() => {
    console.log(index);
    
    setPage(index);
  }, []);

  return (
    <PageNationItemWrap isSelect={index === page} onClick={() => onClickPage()}>
      {index + 1}
    </PageNationItemWrap>
  );
}

export default PageNationItem;