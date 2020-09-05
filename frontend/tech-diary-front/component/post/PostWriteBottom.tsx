import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import Button from 'component/common/Button';
import PostWriteUploadImg from './PostWriteUploadImg';
import Modal from 'component/common/Modal';
import ThumnailSetModal from './ThumnailSetModal';
import { useRouter } from 'next/router';

const Container = styled.div`
  label: post_write_bottom;
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 4rem;
`;

const WriteButtonWrap = styled.div`
  label: write_button_wrap;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const GoToBackButton = styled.div`
  label: go_to_back_button;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

type Props = {
  onPostFunction?: () => void;
  dispatchForForm?: any;
}


function PostWriteBottom({ onPostFunction, dispatchForForm }: Props) {
  const router = useRouter();

  const goBackPage = useCallback(() => {
    if (window.confirm('작성한 내용이 사라질 수 있습니다. 정말 뒤로 가시겠습니까?')) {
      router.back();
    } else {
      return;
    }
  }, [router]);


  return (
    <Container>
      <GoToBackButton>
        <Button type={'primary-trans'} onClick={() => goBackPage()}>뒤로가기</Button>
      </GoToBackButton>
      <WriteButtonWrap>
        <PostWriteUploadImg/>
        <Modal content={<ThumnailSetModal 
          dispatchForForm={dispatchForForm}
          onPostWrite={onPostFunction}/>}>
          <Button type={'primary'}>썸네일</Button>
        </Modal>
      </WriteButtonWrap>
    </Container>
  );
}

export default PostWriteBottom;