import React from 'react';
import styled from '@emotion/styled';
import PostWriteTitleInput from './PostWriteTitleInput';
import PostWriteTextArea from './PostWriteTextArea';
import PostWriteBottom from './PostWriteBottom';
import useForm from 'libs/hooks/useForm';

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

type Props = {
  postId: string;
}

type UpdatePostForm = {
  title: string,
  contents: string,
  thumnailAddress? : string,
}

function PostUpdate({ postId }: Props) {

  const [form, onChange, dispatchForForm] = useForm<UpdatePostForm>({
    title: '',
    contents: '',
    thumnailAddress: '',
  });

  return (
    <Container>
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
            // onPostWrite={onPostWrite}
            dispatchForForm={dispatchForForm}/>
        </FormContainer>
    </Container>
  );
}

export default PostUpdate;