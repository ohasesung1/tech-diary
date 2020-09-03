import React, { ChangeEvent } from 'react';
import styled from '@emotion/styled';

const TextArea = styled.textarea`
  label: post_write_area_wrap;
  width: 100%;
  height: 45rem;
  padding: 1rem;
  resize: none;
  font-size: 1.5rem;
  border: 0px;
  overflow-x: hidden;
  margin-bottom: 1rem;
  /* scroll: none; */
  /* border: 1px solid black; */
`;

type Props = {
  name: string,
  value: string,
  onChange?: (e: ChangeEvent<any>) => void;
}


function PostWriteTextArea({ name, value, onChange } : Props) {
  return (
    <TextArea 
      placeholder={"내용 입력"}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default PostWriteTextArea;