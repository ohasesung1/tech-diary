import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { UPLOAD_FILE_REQUEST } from 'store/modules/upload';

const UploadImg = styled.input`
  label: upload_img_input;
  display: none;
`;

function PostWriteUploadImg() {
  const dispatch = useDispatch();

  const onUploadImageFile = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files;
    const formData = new FormData();

    if (imageFile) {
      console.log(imageFile[0]);
      formData.append('image', imageFile[0]);
      console.log(formData);
      dispatch({
        type: UPLOAD_FILE_REQUEST,
        paylaod: {
          formData,
        }
      });
    }

  }, [dispatch]);

  return (
    <>
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