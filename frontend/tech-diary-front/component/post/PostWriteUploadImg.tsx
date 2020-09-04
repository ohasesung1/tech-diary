import React, { useCallback, useState, ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { UPLOAD_FILE_REQUEST } from 'store/modules/upload';
import { css } from '@emotion/core';

const UploadImg = styled.input`
  label: upload_img_input;
  display: none;
`;

const UploadImgButtonLabel = styled.label<{ size?: string, margin?: string }>`
  label: upload_img_button_label;
  display: flex;
  align-items: center;
  justify-content: center;


  color: white;
  background-color: #51cf66;
  padding: .5rem 1rem;
  border-radius: 5px;
  margin-right: 2rem;

  cursor: pointer;

  ${props =>  {
    if (props.size === 'small') {
      return css`
        padding: .6rem 1rem;
        margin: 1rem 0.5rem;
        font-size: .83rem;
      `;
    }

    return css`font-size: 1rem;`;
  }}
`;

type Props = {
  size?: string;
  margin?: string;
}

function PostWriteUploadImg({ size, margin }: Props) {
  const dispatch = useDispatch();

  const onUploadImageFile = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const imageFile = event.target.files;
    
    if (imageFile) {
      formData.append('image', imageFile[0]);
    }

    dispatch({
      type: UPLOAD_FILE_REQUEST,
      payload: {
        formData,
      }
    });

  }, [dispatch]);

  return (
    <>
    <UploadImgButtonLabel 
      htmlFor={'image_upload'}
      size={size}
      margin={margin}>사진 업로드
      </UploadImgButtonLabel>
      <UploadImg 
        id={'image_upload'}
        type={'file'} 
        accept={'image/gif, image/jpeg, image/jpg, image/png'}
        onChange={onUploadImageFile}>
      </UploadImg>
    </>
  );
}

export default PostWriteUploadImg;