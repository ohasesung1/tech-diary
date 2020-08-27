import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const PageNationItemWrap = styled.div<{ isSelect?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: 0.2rem solid #51cf66;
  background-color: #51cf66;
  color: white;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
  user-select: none;

  margin: 0 1rem;

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
  type?: string;
  index: number;
  page: number;
  totalPage?: number;
  setPage: Function;
}

function PageNationItem({ index, page, setPage, type, totalPage }: Props) {

  const onClickPage = useCallback((pageIndex?: number) => {

    if (pageIndex !== undefined && totalPage) {
      if (pageIndex === totalPage || pageIndex === -1) {
        return;
      }

      setPage(pageIndex);
    } else if (index !== -1) {
      setPage(index);
    }
  }, []);

  return <>{
    index < 0 && type === 'left'?
      <PageNationItemWrap onClick={() => onClickPage(page - 1)}>
        <FaAngleDoubleLeft/>
      </PageNationItemWrap>
      : index < 0 && type === 'right'?
      <PageNationItemWrap onClick={() => onClickPage(page + 1)}>
        <FaAngleDoubleRight/>
      </PageNationItemWrap> :
      <PageNationItemWrap isSelect={index === page} onClick={() => onClickPage()}>
        {index + 1}
      </PageNationItemWrap> 
    }
  </>;
}

export default PageNationItem;