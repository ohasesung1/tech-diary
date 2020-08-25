import React from 'react';
import styled from '@emotion/styled';
import { Post } from 'store/types/post.type';
import PostItem from './PostItem';

const PostsWrap = styled.div`
  label: posts_wrap;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, auto));
  row-gap: 1rem;
  min-height: 100rem;

  border: 1px solid black;

  & > * + * {
    margin: 0.1rem;
  }
`;


type Props = {
  items: Post[];
};

function PostList({ items }: Props) {
  return (
    <PostsWrap>
      {
        items.map((item, i) => {
          return <PostItem key={i} data={item} />
        })
      }
    </PostsWrap>
  );
}

export default PostList;