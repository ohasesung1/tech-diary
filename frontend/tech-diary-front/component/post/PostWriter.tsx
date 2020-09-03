import React from 'react';
import styled from '@emotion/styled';
import HalfPageTemplate from 'component/template/MainTemplate/HalfPageTemplate';
import PostWriteTitleInput from './PostWriteTitleInput';
import PostWriterToolBox from './PostWriterToolBox';
import PostWriteTextArea from './PostWriteTextArea';
import PostWriteBottom from './PostWriteBottom';
import useForm from 'libs/hooks/useForm';
import MarkdownRender from 'component/common/MarkdownRender';

const Container = styled.div`
  label: post_write_container;
  display: flex;
  flex-direction: row;




`;

const FormContainer = styled.div`
  label: form_container;
  position: -webkit-sticky; /* 사파리 브라우저 지원 */
  position: sticky;
  top: 0px;
  /* background: red; */
  /* height: 100%; */
  border: 1px solid black;
`;

type CreatePostForm = {
  title: string,
  contents: string,
  category: string,
  thumnailAddress? : string,
}

function PostWriter() {
  const [form, onChange] = useForm<CreatePostForm>({
    title: '',
    contents: '',
    category: '',
    thumnailAddress: '',
  });

  const onPostWrite = () => {
    const { title, contents } = form;

  }



  return (
    <Container>
      <HalfPageTemplate>
        <FormContainer>
          <PostWriteTitleInput 
            value={form.title}
            onChange={onChange}
            name={"title"}
            />
          <PostWriterToolBox/>
          <PostWriteTextArea
            value={form.contents}
            onChange={onChange}
            name={"contents"}
          />
          <PostWriteBottom/>
        </FormContainer>
      </HalfPageTemplate>
      <HalfPageTemplate>
        <MarkdownRender 
          markdown={form.contents}
          fontSize={'1.2rem'}
        />
      </HalfPageTemplate>
    </Container>
  );
}

export default PostWriter;