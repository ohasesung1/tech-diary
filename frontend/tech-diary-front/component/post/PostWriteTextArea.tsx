import React from 'react';
import styled from '@emotion/styled';

const TextArea = styled.textarea`
  label: post_write_area_wrap;
  width: 100%;
  min-height: 44.5rem;
  padding: 1rem;
  resize: none;
  font-size: 1.5rem;
  border: 1px solid black;
`;


function PostWriteTextArea() {
  return (
    <TextArea placeholder={"내용 입력"}/>
  );
}

export default PostWriteTextArea;