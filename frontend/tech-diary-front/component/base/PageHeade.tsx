import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { getStorage} from 'libs/storage';
import { RootState } from 'store/modules';
import { HiPencilAlt } from 'react-icons/hi';
import Link from "next/link";

const PageHeadeWarp = styled.header`
  label: header;
  width: 100%;
  z-index: 100;
  margin-bottom: 2rem;
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
`;

const LayoutWrap = styled.div`
  label: layout_wrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-left: 0.5rem solid #DDFFAA;
  height: 5rem;
`;

const PageTitle = styled.div`
  label: page_title;
  font-size: 1.4rem;
  padding-left: 1rem;
`;

const WritePostBtnWrap = styled.div`
  label: write_post_btn_wrap;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const WritePostBtn = styled.button`
  label: write_post_btn;

  width: 3rem;
  height: 3rem;
  margin-right: 2rem;
  background-color: #a9e34b;
  border: none;
  outline: none;
  border-radius: 5px;
  color: white;
  
  &:hover {
    cursor: pointer;
  }
`;

type Porps = {
  title: string;
}

function PageHeade({ title }: Porps) {
  const [isToken, setIsToken] = useState(false);
  const { isLoginSuccess } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const token = getStorage('diary-token');

    if (token) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  }, [isToken, isLoginSuccess]);


  return (
    <>
    <PageHeadeWarp>
      <LayoutWrap>
        <PageTitle>{title}</PageTitle>
        {
          isToken ? 
          <WritePostBtnWrap>
            <Link href={`post-write`}>
            <WritePostBtn>
              <HiPencilAlt style={{ width: '2rem', height: '2rem', color: 'white' }}/>
            </WritePostBtn>
            </Link>
          </WritePostBtnWrap>
          : <></>
        }
      </LayoutWrap>
    </PageHeadeWarp>
    </>
  );
}

export default PageHeade;
