import React from 'react';
import styled from '@emotion/styled';

const TitleInput = styled.input`
  label: title_input;
  width: 100%;
  height: 8rem;
  font-size: 3rem;

  padding-left: 1rem;
`;

function PostWriteTitleInput() {
  return (
    <TitleInput placeholder={"제목 입력"}/>
  );
}

export default PostWriteTitleInput;