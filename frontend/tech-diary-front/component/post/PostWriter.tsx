import React from 'react';
import styled from '@emotion/styled';
import HalfPageTemplate from 'component/template/MainTemplate/HalfPageTemplate';
import PostWriteTitleInput from './PostWriteTitleInput';
import PostWriterToolBox from './PostWriterToolBox';
import PostWriteTextArea from './PostWriteTextArea';

const Container = styled.div`
  label: post_write_container;
  display: flex;
  flex-direction: row;




`;

const FormContainer = styled.div`
  label: form_container;
  position: relative;
  padding: 1.5rem;
  height: 100%;
  border: 1px solid black;
`;


function PostWriter() {
  return (
    <Container>
      <HalfPageTemplate>
        <FormContainer>
          <PostWriteTitleInput/>
          <PostWriterToolBox/>
          <PostWriteTextArea/>
        </FormContainer>
      </HalfPageTemplate>
      <HalfPageTemplate>
        
      </HalfPageTemplate>
    </Container>
  );
}

export default PostWriter;