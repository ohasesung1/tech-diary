import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import HalfPageTemplate from 'component/template/MainTemplate/HalfPageTemplate';
import PostWriteTitleInput from './PostWriteTitleInput';
import PostWriterToolBox from './PostWriterToolBox';
import PostWriteTextArea from './PostWriteTextArea';
import PostWriteBottom from './PostWriteBottom';
import useForm from 'libs/hooks/useForm';
import MarkdownRender from 'component/common/MarkdownRender';
import { useDispatch } from 'react-redux';
import { POST_WRITE_REQUEST } from 'store/modules/postWrite';

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
    if (text.length > 3000 || text.length === 0) {
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
  const [form, onChange] = useForm<CreatePostForm>({
    title: '',
    contents: '',
    thumnailAddress: '',
  });

  const onPostWrite = useCallback(() => {
    const { title, contents } = form;

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
    },
  });
  }, [form, dispatch]);



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
          <PostWriteBottom onPostWrite={onPostWrite}/>
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