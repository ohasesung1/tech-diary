import React from 'react';
import styled from '@emotion/styled';
import { Post } from 'store/post.type';
import { wrapGrid } from 'animate-css-grid'
import PostItem from './PostItem';

const PostsWrap = styled.div`
  label: posts_wrap;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-template-rows: repeat(auto-fit, minmax(32rem, 1fr));
  min-height: 100rem;
  /* border: 1px solid black; */
  transition: 0.3s ease-in-out;
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