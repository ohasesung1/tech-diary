import React from 'react';
import styled from '@emotion/styled';
import { Post } from 'store/post.type';
import PostItem from './PostItem';

const PostsWrap = styled.div`
  label: posts_wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
	grid-template-rows: repeat(5, minmax(50px,auto));
  min-height: 100rem;
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