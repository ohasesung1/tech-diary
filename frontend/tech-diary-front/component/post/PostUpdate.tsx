import React, { useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import PostWriteTitleInput from './PostWriteTitleInput';
import PostWriteTextArea from './PostWriteTextArea';
import PostWriteBottom from './PostWriteBottom';
import useForm from 'libs/hooks/useForm';
import HalfPageTemplate from 'component/template/MainTemplate/HalfPageTemplate';
import MarkdownRender from 'component/common/MarkdownRender';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { POST_UPDATE_REQUEST } from 'store/modules/postUpdate';
import { Post } from 'store/types/post.type';
import { RootState } from 'store/modules';

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

type Props = {
  postId: string;
  postData: Post;
}

type UpdatePostForm = {
  title: string,
  contents: string,
  thumnailAddress? : string,
}

function PostUpdate({ postId, postData }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const { contents, title, thumbnail_address } = postData;

  const [form, onChange, dispatchForForm] = useForm<UpdatePostForm>({
    title: title,
    contents: contents,
    thumnailAddress: thumbnail_address,
  });

  const { imgs } = useSelector((state: RootState) => state.upload);
  const { stateType } = useSelector((state: RootState) => state.postUpdate);

  const onPostUpdate = useCallback(() => {
    const { title, contents, thumnailAddress } = form;

    const errorMsg = validate.title(title) 
    || validate.contents(contents)
    || null;

  if (errorMsg) {
    alert(errorMsg);
    return;
  }

  console.log(thumnailAddress);
  

  dispatch({
    type: POST_UPDATE_REQUEST,
    payload: {
      id: postId,
      title,
      contents,
      thumnailAddress,
    },
  });
  }, [dispatch, form]);

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
          <PostWriteTextArea
            value={form.contents}
            onChange={onChange}
            name={"contents"}
          />
          <PostWriteBottom
            onPostFunction={onPostUpdate}
            dispatchForForm={dispatchForForm}
            thumnailAddress={form.thumnailAddress}/>
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

export default PostUpdate;