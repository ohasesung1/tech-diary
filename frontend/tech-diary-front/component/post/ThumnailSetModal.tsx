import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PostWriteUploadImg from './PostWriteUploadImg';
import Button from 'component/common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { UPLOAD_THUMNAIL_REQUEST } from 'store/modules/upload';
import { RootState } from 'store/modules';

const Container  = styled.div`
  label: thumnail_set_container;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
`;

const ThumnailImage = styled.img`
  label: thumnail_image;
  max-width: 25rem;
  max-height: 15rem;
  margin-bottom: 1rem;
`;

const BottomWrap = styled.div`
  label: bottom_wrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 3rem;
`;

const UploadThumnail = styled.input`
  label: upload_img_input;
  display: none;
`;

const UploadThumnailButtonLabel = styled.label`
  label: upload_thumnail_button_label;
  display: flex;
  align-items: center;
  justify-content: center;


  color: white;
  background-color: #51cf66;
  padding: .5rem 1rem;
  border-radius: 5px;
  margin-right: 2rem;

  cursor: pointer;
`;

type Props = {
  onPostFunction?: () => void;
  dispatchForForm?: any;
  thumnailAddress?: string;
}


function ThumnailSetModal({ dispatchForForm, onPostFunction, thumnailAddress }: Props) {
  const dispatch = useDispatch();
  const { thumnail } = useSelector((state: RootState) => state.upload);

  const [thumnailSrc, setThumnailSrc] = useState(thumnailAddress);

  const onUploadThumnailFile = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const imageFile = event.target.files;


    if (imageFile) {
      formData.append('image', imageFile[0]);
    }

    dispatch({
      type: UPLOAD_THUMNAIL_REQUEST,
      payload: {
        formData,
      }
    });

  }, [dispatch]);

  useEffect(() => {
      dispatchForForm({
        name: 'thumnailAddress',
        value: thumnail,
      });
      if (thumnail) {
        setThumnailSrc(thumnail);
      }
  }, [thumnail]);

  useEffect(() => {
    if (thumnailAddress) {
      console.log(thumnailAddress);
      
      setThumnailSrc(thumnailAddress);
    } else {
      setThumnailSrc('http://localhost:8000/static/img/thumnail_default.png');
    }
  }, []);

  return (
    <Container>
      <ThumnailImage src={thumnailSrc}/>
      <BottomWrap>
        <UploadThumnailButtonLabel
          htmlFor={'thumnail_upload'}>썸네일 업로드
        </UploadThumnailButtonLabel>
        <UploadThumnail
          id={'thumnail_upload'}
          type={'file'} 
          accept={'image/gif, image/jpeg, image/jpg, image/png'}
          onChange={onUploadThumnailFile}
        />
        <Button type={'primary'} size={'small'} margin={'0rem 1rem'} onClick={onPostFunction}>출간하기</Button>
      </BottomWrap>
    </Container>
  );
}

export default ThumnailSetModal;