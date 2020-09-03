import React, { ChangeEvent } from 'react';
import styled from '@emotion/styled';

const TitleInput = styled.input`
  label: title_input;
  width: 100%;
  height: 8rem;
  font-size: 3rem;

  padding-left: 1rem;
`;

type Props = {
  name: string,
  value: string,
  onChange?: (e: ChangeEvent<any>) => void;
}


function PostWriteTitleInput({ name, value, onChange }: Props) {
  return (
    <TitleInput placeholder={"제목 입력"}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default PostWriteTitleInput;