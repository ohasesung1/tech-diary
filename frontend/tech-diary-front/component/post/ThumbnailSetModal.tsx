import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Button from 'component/common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { UPLOAD_THUMNAIL_REQUEST } from 'store/modules/upload';
import { RootState } from 'store/modules';

const Container  = styled.div`
  label: thumbnail_set_container;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
`;

const ThumbnailImage = styled.img`
  label: thumbnail_image;
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

const UploadThumbnail = styled.input`
  label: upload_img_input;
  display: none;
`;

const UploadThumbnailButtonLabel = styled.label`
  label: upload_thumbnail_button_label;
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
  thumbnailAddress?: string;
}


function ThumbnailSetModal({ dispatchForForm, onPostFunction, thumbnailAddress }: Props) {
  const dispatch = useDispatch();
  const { thumbnail } = useSelector((state: RootState) => state.upload);

  const [thumbnailSrc, setThumbnailSrc] = useState(thumbnailAddress);

  const onUploadThumbnailFile = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
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
        name: 'thumbnailAddress',
        value: thumbnail,
      });

      if (thumbnail === "") {
        dispatchForForm({
          name: 'thumbnailAddress',
          value: thumbnailSrc,
        });

        console.log('testset', thumbnailSrc);
      }

      if (thumbnail !== "") {
        setThumbnailSrc(thumbnail);
      }
  }, [thumbnail, thumbnailSrc]);

  useEffect(() => {
    if (thumbnailAddress) {
      setThumbnailSrc(thumbnailAddress);
    } else {
      setThumbnailSrc('https://happy-ohaeseong.com:8888/static/img/thumnail_default.png');
    }
  }, []);

  return (
    <Container>
      <ThumbnailImage src={thumbnailSrc}/>
      <BottomWrap>
        <UploadThumbnailButtonLabel
          htmlFor={'thumbnail_upload'}>썸네일 업로드
        </UploadThumbnailButtonLabel>
        <UploadThumbnail
          id={'thumbnail_upload'}
          type={'file'} 
          accept={'image/gif, image/jpeg, image/jpg, image/png'}
          onChange={onUploadThumbnailFile}
        />
        <Button type={'primary'} size={'small'} margin={'0rem 1rem'} onClick={onPostFunction}>출간하기</Button>
      </BottomWrap>
    </Container>
  );
}

export default ThumbnailSetModal;