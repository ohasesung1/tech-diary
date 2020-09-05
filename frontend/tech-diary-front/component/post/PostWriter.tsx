import React, { useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import HalfPageTemplate from 'component/template/MainTemplate/HalfPageTemplate';
import PostWriteTitleInput from './PostWriteTitleInput';
import PostWriteTextArea from './PostWriteTextArea';
import PostWriteBottom from './PostWriteBottom';
import useForm from 'libs/hooks/useForm';
import MarkdownRender from 'component/common/MarkdownRender';
import { useDispatch, useSelector } from 'react-redux';
import { POST_WRITE_REQUEST } from 'store/modules/postWrite';
import { RootState } from 'store/modules';
import { useRouter } from 'next/router';

const Container = styled.div`
  label: post_write_container;
  display: flex;
  flex-direction: row;
`;

const FormContainer = styled.div`
  label: form_container;
  position: -webkit-sticky;
  position: sticky;
  top: 2.5rem;
`;

const validate = {
  title: (text: string) => {
    if (text.length > 50 || text.length === 0) {
      return '제목 양식을 지켜주세요.';
    }
  },
  contents: (text: string) => {
    if (text.length === 0) {
      return '내용 양식을 지켜주세요.';
    }
  },
}

type CreatePostForm = {
  title: string,
  contents: string,
  thumnailAddress? : string,
}

type Props = {
  category: string;
}

function PostWriter({ category }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [form, onChange, dispatchForForm] = useForm<CreatePostForm>({
    title: '',
    contents: '',
    thumnailAddress: 'http://localhost:8000/static/img/thumnail_default.png',
  });
  const { imgs } = useSelector((state: RootState) => state.upload);
  const { stateType } = useSelector((state: RootState) => state.postWrite);

  const onPostWrite = useCallback(() => {
    const { title, contents, thumnailAddress } = form;

    const errorMsg = validate.title(title) 
    || validate.contents(contents)
    || null;

  if (errorMsg) {
    alert(errorMsg);
    return;
  }

  dispatch({
    type: POST_WRITE_REQUEST,
    payload: {
      title,
      contents,
      category,
      thumnailAddress,
    },
  });
  }, [form, dispatch, imgs]);


  useEffect(() => {
    if (imgs.length) {

      const imageAddress = `\n![](${imgs})`;

      dispatchForForm({
        name: 'contents',
        value: form.contents += imageAddress,
      });
    }
  }, [imgs]);

  useEffect(() => {
    if (stateType && stateType === 'success') {
      router.back();
    }
  }, [stateType, router]);


  return (
    <Container>
      <HalfPageTemplate>
        <FormContainer>
          <PostWriteTitleInput 
            value={form.title}
            onChange={onChange}
            name={"title"}
            />
          {/* <PostWriterToolBox/> */}
          <PostWriteTextArea
            value={form.contents}
            onChange={onChange}
            name={"contents"}
          />
          <PostWriteBottom 
            onPostWrite={onPostWrite}
            dispatchForForm={dispatchForForm}/>
        </FormContainer>
      </HalfPageTemplate>
      <HalfPageTemplate color={'#f8f9fa'}>
        <MarkdownRender 
          markdown={form.contents}
          fontSize={'1.2rem'}
        />
      </HalfPageTemplate>
    </Container>
  );
}

export default PostWriter;