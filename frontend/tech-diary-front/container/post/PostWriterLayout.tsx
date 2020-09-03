import React from 'react';
import PostWriter from 'component/post/PostWriter';

type Props = {
  category: string;
}

function PostWriterLayout({ category }: Props) {
  return (
    <>
      <PostWriter category={category}/>
    </>
  );
}

export default PostWriterLayout;