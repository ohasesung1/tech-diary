import React from 'react';
import styled from '@emotion/styled';
import Button from 'component/common/Button';
import PostWriteUploadImg from './PostWriteUploadImg';

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

const UploadImgButtonLabel = styled.label`
  label: upload_img_button_label;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 3rem;

  color: white;
  background-color: #51cf66;
  padding: 1rem;
  border-radius: 5px;
  margin-right: 2rem;

  cursor: pointer;
`;

type Props = {
  onPostWrite?: () => void;
}


function PostWriteBottom({ onPostWrite }: Props) {
  return (
    <Container>
      <GoToBackButton>
        <Button type={'primary-trans'}>뒤로가기</Button>
      </GoToBackButton>
      <WriteButtonWrap>
        <UploadImgButtonLabel htmlFor={'image_upload'}>사진 업로드</UploadImgButtonLabel>
        <PostWriteUploadImg/>
        <Button type={'primary'} onClick={onPostWrite}>출간하기</Button>
      </WriteButtonWrap>
    </Container>
  );
}

export default PostWriteBottom;