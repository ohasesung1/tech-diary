import React from 'react';
import styled from '@emotion/styled';
import { Post } from 'store/types/post.type';
import PostItem from './PostItem';

const PostsWrap = styled.div`
  label: posts_wrap;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, auto));
  grid-template-rows: repeat(auto-fit, 30rem);
  row-gap: 2rem;
  min-height: 100rem;

  animation-timing-function: 'ease-out';
`;

type Props = {
  items: Post[];
  page: string;
};

function PostList({ items, page }: Props) {
  return (
    <PostsWrap>
      {
        items.map((item, i) => {
          return <PostItem key={i} data={item} page={page}/>
        })
      }
    </PostsWrap>
  );
}

export default PostList;