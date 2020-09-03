import React from 'react';
import styled from '@emotion/styled';
import Button from 'component/common/Button';

const Container = styled.div`
  label: post_write_bottom;
  height: 4rem;
  border: 1px solid black;
`;


function PostWriteBottom() {
  return (
    <Container>
      <Button>뒤로가기</Button>
    </Container>
  );
}

export default PostWriteBottom;